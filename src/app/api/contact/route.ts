import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Use Cloudinary URL for the logo
    const logoUrl =
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744002043/White_and_Black_Modern_Initial_H_Logo_1_wemtna.png";

    // Use Cloudinary URL for the background image
    const backgroundUrl =
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744009272/White_and_Black_Modern_Initial_H_Logo_2_vz8rmp.png";

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content for your notification
    const mailOptions = {
      from: email,
      to: "hashfimawarid@gmail.com",
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Enhanced Spotify-themed auto-reply template with background image
    const autoReplyOptions = {
      from: "hashfimawarid@gmail.com",
      to: email,
      subject: "Thanks for reaching out! I've received your message",
      text: `
        Hello ${name},
        
        Thank you for contacting me. I've received your message and will get back to you as soon as possible.
        
        Best regards,
        Hashfi Mawarid
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thanks for your message</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #FFFFFF;
              margin: 0;
              padding: 0;
              background-color: #121212;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-image: url('${backgroundUrl}');
              background-repeat: repeat;
              background-color: #181818; /* Fallback if image fails */
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              padding: 20px 0;
              text-align: center;
              border-bottom: 1px solid #333;
            }
            .logo-container {
              margin-bottom: 15px;
            }
            .logo {
              width: 120px;
              height: auto;
              display: block;
              margin: 0 auto;
            }
            .name {
              font-size: 24px;
              font-weight: bold;
              margin-top: 10px;
              color: #B3B3B3;
            }
            .content {
              padding: 20px 0;
              color: #B3B3B3;
            }
            .highlight {
              color: #B3B3B3;
              font-weight: bold;
            }
            .button {
              display: inline-block;
              background-color: #1DB954;
              color: #000000 !important;
              text-decoration: none;
              font-weight: bold;
              padding: 12px 24px;
              border-radius: 24px;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              padding-top: 20px;
              border-top: 1px solid #333;
              font-size: 12px;
              color: #B3B3B3;
            }
            .social-links {
              padding: 15px 0;
            }
            .social-links a {
              display: inline-block;
              margin: 0 10px;
              color: #B3B3B3;
              text-decoration: none;
            }
            h1, h2 {
              color: #FFFFFF;
              margin-top: 0;
            }
            p {
              color: #B3B3B3;
            }
            .message-details {
              background-color: rgba(42, 42, 42, 0.8);
              border-radius: 4px;
              padding: 15px;
              margin: 20px 0;
            }
            .message-details p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#121212">
            <tr>
              <td align="center" bgcolor="#121212">
                <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="background-image: url('${backgroundUrl}'); background-repeat: repeat; background-color: #181818; border-radius: 8px; margin: 20px auto;">
                  <tr>
                    <td>
                      <div class="header">
                        <div class="logo-container">
                          <img src="${logoUrl}" alt="Hashfi Mawarid Logo" class="logo" style="width: 120px; height: auto; display: block; margin: 0 auto;">
                        </div>
                        <div class="name" style="font-size: 24px; font-weight: bold; margin-top: 10px; color: #B3B3B3; text-align: center;">
                          Hashfi <span class="highlight" style="color: #B3B3B3; font-weight: bold;">Mawarid</span>
                        </div>
                      </div>
                      
                      <div class="content" style="padding: 20px 0; color: #B3B3B3;">
                        <h2 style="color: #FFFFFF; margin-top: 0;">Thanks for reaching out!</h2>
                        <p style="color: #B3B3B3;">Hello <span class="highlight" style="color: #B3B3B3; font-weight: bold;">${name}</span>,</p>
                        <p style="color: #B3B3B3;">I've received your message and appreciate you taking the time to contact me. I'll review your inquiry and get back to you as soon as possible.</p>
                        
                        <div class="message-details" style="background-color: rgba(42, 42, 42, 0.8); border-radius: 4px; padding: 15px; margin: 20px 0;">
                          <p style="margin: 5px 0; color: #B3B3B3;"><strong>Subject:</strong> ${subject}</p>
                          <p style="margin: 5px 0; color: #B3B3B3;"><strong>Received on:</strong> ${new Date().toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}</p>
                        </div>
                        
                        <p style="color: #B3B3B3;">If you have any urgent matters, feel free to reach out to me via WhatsApp</p>
                        <div style="text-align: center;">
                          <a href="https://wa.me/6285172275576" class="button" style="display: inline-block; background-color: #1DB954; color: #000000 !important; text-decoration: none; font-weight: bold; padding: 12px 24px; border-radius: 24px; margin: 20px 0;">Chat on WhatsApp</a>
                        </div>
                      </div>
                      
                      <div class="footer" style="text-align: center; padding-top: 20px; border-top: 1px solid #333; font-size: 12px; color: #B3B3B3;">
                        <div class="social-links" style="padding: 15px 0;">
                          <a href="https://github.com/hashfimw" style="display: inline-block; margin: 0 10px; color: #B3B3B3; text-decoration: none;">GitHub</a> | 
                          <a href="https://linkedin.com/in/hashfimawarid" style="display: inline-block; margin: 0 10px; color: #B3B3B3; text-decoration: none;">LinkedIn</a> | 
                          <a href="https://twitter.com/" style="display: inline-block; margin: 0 10px; color: #B3B3B3; text-decoration: none;">Twitter</a>
                        </div>
                        <p style="color: #B3B3B3;">© ${new Date().getFullYear()} Hashfi Mawarid. All rights reserved.</p>
                        <p style="color: #B3B3B3;">Bandung, Indonesia</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send the main email notification to you
    await transporter.sendMail(mailOptions);

    // Send the auto-reply
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
