import nodemailer from "nodemailer";
import UserModel from "@/models/userSchema";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await UserModel.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await UserModel.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
            or copy and paste the link below in your browser. <br> ${
              process.env.DOMAIN
            }/verifyemail?token=${hashedToken}
            </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
