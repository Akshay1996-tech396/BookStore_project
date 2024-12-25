import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactFormRoute from "./route/contactForm.route.js"; // Import the contact form route

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contactform", contactFormRoute); // Add the contact form route

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
