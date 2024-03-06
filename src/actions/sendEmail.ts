"use server";

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (str: unknown, maxLength: number) : boolean => {
  if(!str || typeof str !== "string" || str.length > maxLength) {
    return false;
  }
  return true;
}

export const sendEmail = async (formData: FormData) => {
  console.log("Running in server");
  
  const email = formData.get("senderEmail");
  const message = formData.get("message")

  if(!validateString(email, 100)) {
    return {
      error: "Email should be string and less than 100 characters in length"
    }
  }

  if(!validateString(message, 500)) {
    return {
      error: "Message should be string and less than 100 characters in length"
    }
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboard@resend.dev>",
      to: "himanshupandey1036@gmail.com",
      subject: "Message from Portfolio",
      reply_to: email as string,
      html: `
      <h3>Hi Himanshu,</h3>
      <p>My Email Id is : ${email}</p>
      <p>I was saying that ${message}<p>
      ` 
    }) 
  } catch (error: unknown) {
    console.error("Email Not sent because of : ", error);
  }
  
  console.log("Email sent");
  
};
