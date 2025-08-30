import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if RESEND_API_KEY is available
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact me directly.' },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain later
      to: 'kaleemullah786.ku61@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF7E00; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #333;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #FF7E00;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 8px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              Sent from your portfolio website on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `New contact form submission from ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}\n\nSent on ${new Date().toLocaleString()}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again later or contact me directly.',
      },
      { status: 500 }
    );
  }
}
