const nodemailer = require('nodemailer');

const { GMAIL_USER, GMAIL_PASS } = process.env;

const mailing = async (fullName, email, reservationDate, reservationTime) => {
  const htmlEmail = `
  <img src="https://d.top4top.io/p_1664jm2qu1.png%E2%80%8E%E2%80%8F">
  <h3>${fullName}, Welcome to our store.</h3>
  <strong>Your reservation appointment would be at: ${reservationDate}- ${reservationTime} EST</strong><br/>
  Want to make any updates on your reservation time/date? Call us at (201) 330-1212<br/>
  Monday – Saturday, 10:00am – 6:00pm EST.<br/>
  Sundays, 12:00pm – 5:00pm EST <br/> 
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
      subject: 'Confirm Reservation ✔', // Email Subject
      text: 'Thank you for reserving', // plain text body
      html: htmlEmail, // html body
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = mailing;
