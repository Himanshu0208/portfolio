"use server";

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (str: unknown, maxLength: number) : boolean => {
  if(!str || typeof str !== "string" || str.length > maxLength) {
    return false;
  }
  return true;
}

export const sendEmail = (formData: FormData): Promise<string> => {
  console.log("Running in server");

  return new Promise((resolve, reject) => {
    try {
      const email = formData.get("senderEmail");
      const message = formData.get("message");

      if (!validateString(email, 100)) {
        throw new Error("Email should be a string and less than 100 characters in length");
      }

      if (!validateString(message, 500)) {
        throw new Error("Message should be a string and less than 500 characters in length");
      }

      resend.emails.send({
        from: "Contact Form <onboard@resend.dev>",
        to: "himanshupandey1036@gmail.com",
        subject: "Message from Portfolio",
        reply_to: email as string,
        html: `
          <h3>Hi Himanshu,</h3>
          <p>My Email Id is : ${email}</p>
          <p>I was saying that ${message}</p>
        ` 
      });

      console.log("Email sent");
      resolve("Email sent successfully");
    } catch (error: unknown) {
      console.error("Email Not sent because of : ", error);
      reject("Failed to send email: " + error);
    }
  });
};
