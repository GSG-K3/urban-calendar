const nodemailer = require('nodemailer');

const { GMAIL_USER, GMAIL_PASS } = process.env;

async function mailing(fullName, email, reservationDate) {
  const htmlEmail = `<h3>Thank you for reserving in our Store..👻</h3>
  <p><b>${fullName}</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  <ul>
  <li>your reservation Date is: ${reservationDate}</li>
  </ul>`;

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
