import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    message: { type: String, required: true }
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

export default ContactForm;
