const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const info = await transporter.sendMail({
    from: 'Contact Marijo Fit Life <contact@marijofitlife.com>',
    to: 'marijo.fit.life@gmail.com',
    subject: 'Contact Form',
    html: `<p>Testing Contact</p>`,
  });

  console.log(info);

  return {
    statusCode: 200,
    body: info.response,
  };
};
