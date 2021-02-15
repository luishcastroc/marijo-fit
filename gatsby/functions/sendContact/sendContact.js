const nodemailer = require('nodemailer');
const axios = require('axios').default;

function generateContactEmail({ name, email, phone, comment }) {
  return /* html */ `<div>
    <h2>Contacto recibido</h2>
    <p>
      <span class="title">Nombre:</span>
      <span class="content">${name}</span>
    </p>
    <p>
      <span class="title">Correo Electrónico:</span>
      <span class="content">${email}</span>
    </p>
    <p>
      <span class="title">Teléfono:</span>
      <span class="content">${phone}</span>
    </p>
    <p>
      <span class="title">Comentario:</span>
      <span class="content">${comment}</span>
    </p>
    <style>
        p {
          display:flex;
          flex-direction: column;
        }

        .title {
          margin-right: 10px;
        }

        .content {
          margin-top: 1rem;
        }
    </style>
  </div>`;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  const { token } = body;

  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Oops! no se aceptan robotitos`,
      }),
    };
  }
  try {
    const response = await axios.post(
      `${process.env.GATSBY_GOOGLE_VERIFY}?secret=${process.env.GATSBY_RECAPTCHA_SECRET_BACK}&response=${token}`
    );
    const { success, score } = response.data;
    if (!success || score < 0.4) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! no se aceptan robotitos`,
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error verificando Captcha`,
      }),
    };
  }

  const requiredFields = ['name', 'email', 'phone', 'comment'];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! olvidaste mandar el campo ${field}`,
        }),
      };
    }
  }

  const info = await transporter.sendMail({
    from: 'Contact Marijo Fit Life <contact@marijofitlife.com>',
    to: 'marijo.fit.life@gmail.com',
    subject: `Forma de Contacto de ${body.name}`,
    html: generateContactEmail(body),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Contacto Exitoso.' }),
  };
};
