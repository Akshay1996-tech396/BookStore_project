import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import ContactForm from "../model/contactForm.model.js";

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, dob, gender, city, state, message } = req.body;

    try {
        const newForm = new ContactForm({ name, email, dob, gender, city, state, message });
        await newForm.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            text: `
              Name: ${name}
              Email: ${email}
              Date of Birth: ${dob}
              Gender: ${gender}
              City: ${city}
              State: ${state}
              Message: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Form data saved successfully, and email sent!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred while saving form data or sending email" });
    }
});

export default router; // Add the default export
