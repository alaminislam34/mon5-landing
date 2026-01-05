import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // This sends the contact info TO YOU
    const logoUrl = "http://localhost:3000/logos/logo.png";

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `📩 New Message from ${name}`,
      replyTo: email,
      // Using 'html' instead of 'text' for the modern design
      html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 1px solid #eee;">
        <img src="${logoUrl}" alt="Logo" style="max-height: 50px; margin-bottom: 10px;">
        <h2 style="margin: 0; color: #1a1a1a; font-size: 20px;">New Inquiry Received</h2>
      </div>

      <div style="padding: 30px;">
        <p style="margin-top: 0;">You have received a new message through your website contact form.</p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 100px;"><strong>Name:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
              <a href="mailto:${email}" style="color: #0070f3; text-decoration: none;">${email}</a>
            </td>
          </tr>
        </table>

        <div style="margin-top: 25px; padding: 20px; background-color: #fcfcfc; border-left: 4px solid #0070f3; font-style: italic;">
          "${message}"
        </div>

        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:${email}" style="background-color: #0070f3; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
            Reply to Message
          </a>
        </div>
      </div>

      <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #999;">
        <p style="margin: 0;">Sent from your website: http://localhost:3000</p>
      </div>
    </div>
  `,
    });

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
