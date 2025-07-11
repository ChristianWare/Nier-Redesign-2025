import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SEND_EMAIL = "chris.ware.dev@gmail.com";
// const SEND_EMAIL = "reservations@niertransportation.com";
const PASSWORD = "eayw aboq lrso ugqx";
const ADDITIONAL_EMAIL = "reservations@niertransportation.com"; // Add the second email address here
const ADDITIONAL_EMAILII = "chris.ware.dev@gmail.com"; // Add the second email address here

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: SEND_EMAIL,
    pass: PASSWORD,
  },
});

export async function POST(request: Request) {
  const data = await request.json();
  const info = await transporter.sendMail({
    from: `"Nier Transportation Contact Form Submission" <${ADDITIONAL_EMAIL}>`, // sender name and address
    to: `${ADDITIONAL_EMAIL}, ${ADDITIONAL_EMAILII}`, // list of receivers
    replyTo: data.senderEmail, // reply-to address
    subject: "You have a new message!", 
    text: "Hello world?",
    html: `<b>First Name:</b> <br/> 
            ${data?.firstName} <br/> <br/>
            <b>Last Name:</b> <br/> 
            ${data?.lastName} <br/> <br/>
            <b>Email:</b> </b> <br/> 
            ${data?.senderEmail} <br/> <br/>
            <b>Group Size:</b> <br/> 
            ${data?.companyName} <br/> <br/>
            <b>Length of Stay:</b> <br/> 
            ${data?.currentWebsiteUrl} <br/> <br/>
            <b>Message:</b> </b> 
            ${data?.message}`,
  });

  return NextResponse.json({
    messageId: info.messageId,
  });
}
