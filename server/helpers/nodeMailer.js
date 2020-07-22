const nodemailer = require('nodemailer');

const { GMAIL_USER, GMAIL_PASS } = process.env;

async function mailing(fullName, email, reservationDate, reservationTime) {
  const htmlEmail = `<h3>${fullName} thank you for reserving in our Store..</h3>
  <ul>your reservation Date is: ${reservationDate}- ${reservationTime}EST</ul>
  <ul>Want to chat by phone to let us take your remains? Call us at (201) 330-1212</ul>
  <ul>Monday – Saturday, 10:00am – 6:00pm EST.</ul>
  <ul>Sundays, 12:00pm – 5:00pm EST </ul> 
  `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: true,
    },
  });
  try {
    const mailOptions = await transporter.sendMail({
      date: new Date(),
      from: 'Urban-natural@gmail.com',
      to: email,
      subject: 'Confirmation Reservation ✔', // Email Subject
      text: 'Thank you for reserving', // plain text body
      html: htmlEmail, // html body
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = mailing;
