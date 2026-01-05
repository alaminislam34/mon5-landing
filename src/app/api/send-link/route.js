import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const logoUrl = "http://localhost:3000/logos/logo.png";

    await transporter.sendMail({
      from: `"Mon5Majeur" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "🚀 Get Started with Mon5Majeur",
      text: "Welcome! You can download the app at: https://mon5majeur.com",
      html: `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f7; padding: 40px 0; color: #333;">
      <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        
        <div style="padding: 30px; text-align: center; background-color: #ffffff;">
          <img src="${logoUrl}" alt="Mon5Majeur" style="max-height: 60px; width: auto; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px; color: #1a1a1a; font-weight: 700;">Ready to Play?</h1>
        </div>

        <div style="padding: 0 40px 30px 40px; text-align: center;">
          <p style="font-size: 16px; line-height: 1.6; color: #555; margin-bottom: 25px;">
            Thank you for choosing <strong>Mon5Majeur</strong>. Your journey starts here. Click the button below to download the application and get started.
          </p>
          
          <a href="https://mon5majeur.com" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            Download the App
          </a>

          <p style="margin-top: 25px; font-size: 14px; color: #888;">
            If the button doesn't work, copy and paste this link into your browser:<br>
            <a href="https://mon5majeur.com" style="color: #0070f3;">https://mon5majeur.com</a>
          </p>
        </div>

        <div style="background-color: #fafafa; padding: 20px; text-align: center; border-top: 1px solid #eeeeee;">
          <p style="margin: 0; font-size: 12px; color: #aaa;">
            &copy; 2026 Mon5Majeur. All rights reserved.<br>
            You received this because you requested a download link.
          </p>
        </div>
      </div>
    </div>
  `,
    });

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json(
      { success: false, error: "something went wrong" },
      { status: 500 }
    );
  }
}
