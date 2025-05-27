import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { SmtpClient } from 'npm:nodemailer';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message, preferredContact } = await req.json();

    // Create SMTP transporter
    const transporter = new SmtpClient({
      host: Deno.env.get('SMTP_HOST'),
      port: parseInt(Deno.env.get('SMTP_PORT') || '587'),
      secure: false,
      auth: {
        user: Deno.env.get('SMTP_USER'),
        pass: Deno.env.get('SMTP_PASS'),
      },
    });

    const date = new Date().toLocaleString();
    const emailBody = `
Contact Form Submission Details
=============================

Sender Information
-----------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Preferred Contact Method: ${preferredContact}

Message Content
-------------
Subject: ${subject}

${message}

System Information
----------------
Date: ${date}
Source: Contact Form
IP: ${req.headers.get('x-forwarded-for') || 'Unknown'}
User Agent: ${req.headers.get('user-agent') || 'Unknown'}

This email was sent from the contact form at ${req.headers.get('origin')}
    `.trim();

    // Send email
    await transporter.sendMail({
      from: Deno.env.get('SMTP_FROM'),
      to: 'asamofficial16@gmail.com',
      subject: `[Contact Form] ${subject}`,
      text: emailBody,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        } 
      }
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
});