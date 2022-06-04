import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1023529b0370de",
    pass: "12517ff09948d9"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com',
      to: 'Jonas Souza <jhonask25@gmail.com>',
      subject,
      html: body
    });
  };
}