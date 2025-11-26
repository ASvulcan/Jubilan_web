// backend/server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, comment } = req.body;

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.MAIL_TO,
      subject: `New Contact Form Submission`,
      text: comment,
    });

    res.json({ message: "Email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
