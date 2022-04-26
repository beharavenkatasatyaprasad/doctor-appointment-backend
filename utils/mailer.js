const nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

const sendEmail = async (message) => {

  message.from = 'Doctor Appointment app <donotreply@doctorappointment.com';

  let info = await transporter.sendMail(message);

  console.log(`Mail SENT: ${info}`);

  return;
};

module.exports = {sendEmail}