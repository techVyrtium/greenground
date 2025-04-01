import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { fullname, email, company, message, phone, interes } = await request.json();
  //console.log(name, process.env.SEND_EMAIL);
  await sendEMail(fullname, email, company, message, phone, interes);
  return NextResponse.json("res");
}

async function sendEMail(fullname, email, company, message, phone, interes) {

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SEND_EMAIL,
        pass: process.env.PASSEMAIL,
      },
    });
    // const destinatariosString = destinatarios.join(",");
    const mailOptions = {
      from: email,
      to: process.env.SEND_EMAIL,
      subject: "Nuevo Interesado: ", fullname,
      html: `
        <html>
          <body>
            <h1>Hola, nuevo registro ha sido cargado</h1>
            <hr />
            <ul>
              <li>
                <p>Name: ${fullname}</p>
              </li>
               <li>
                <p>Email: ${company}</p>
              </li>
              <li>
                <p>Email: ${email}</p>
              </li>
              <li>
                <p>Phone: ${phone}</p>
              </li>
              <li>
                <p>Interest: ${interes}</p>
              </li>
              <li>
                <p>message: ${message}</p>
              </li>
            </ul>
          </body>
        </html>`
      
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
}
