const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req, res) => {
  const { msg } = req.body;
  sgMail
    .send(msg)
    .then(() => {
      return res.status(200).end();
    })
    .catch((error) => {
      return res.status(404).json(error);
    });
};

export default sendEmail;
