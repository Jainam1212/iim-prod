/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const subscribeForm = async (userContact: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Website Notifications" <${process.env.GMAIL_USER}>`,
      to: "services.infraindiamart@gmail.com",
      subject: "New Subscription Message",
      text: `User with Contact: ${userContact} wishes to subscribe to whatsapp updates`
    };
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.messageId);

    return {
      success: true,
      message: "Email successfully sent!",
      result,
    };
  } catch (error: any) {
    console.error("Email error:", error);

    return {
      success: false,
      message: "Failed to send email",
      error: error.message,
    };
  }
};

export const moreInfoInquire = async (userContact: string) => {
    try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Website Notifications" <${process.env.GMAIL_USER}>`,
      to: "services.infraindiamart@gmail.com",
      subject: "Product Inquiry",
      text: `User with Contact: ${userContact} wishes to subscribe to whatsapp updates`
    };
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.messageId);

    return {
      success: true,
      message: "Email successfully sent!",
      result,
    };
  } catch (error: any) {
    console.error("Email error:", error);

    return {
      success: false,
      message: "Failed to send email",
      error: error.message,
    };
  }
};
export const moreInfoForm = async (userContact: string) => {
    try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Website Notifications" <${process.env.GMAIL_USER}>`,
      to: "services.infraindiamart@gmail.com",
      subject: "More Info Inquiry",
      text: `User with Contact: ${userContact} wishes to subscribe to whatsapp updates`
    };
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.messageId);

    return {
      success: true,
      message: "Email successfully sent!",
      result,
    };
  } catch (error: any) {
    console.error("Email error:", error);

    return {
      success: false,
      message: "Failed to send email",
      error: error.message,
    };
  }
};
export const contactForm = async(userContact: string) => {
    try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Website Notifications" <${process.env.GMAIL_USER}>`,
      to: "services.infraindiamart@gmail.com",
      subject: "General Inquiry",
      text: `User with Contact: ${userContact} wishes to subscribe to whatsapp updates`
    };
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.messageId);

    return {
      success: true,
      message: "Email successfully sent!",
      result,
    };
  } catch (error: any) {
    console.error("Email error:", error);

    return {
      success: false,
      message: "Failed to send email",
      error: error.message,
    };
  }
};
