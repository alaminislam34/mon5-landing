import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log("Using User:", process.env.SMTP_USER);

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

    await transporter.sendMail({
      from: `"Mon5Majeur" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your App Download Link",
      text: "Download Link: https://mon5majeur.fr",
      html: `<b>Click <a href="https://mon5majeur.fr">here</a> to download.</b>`,
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
