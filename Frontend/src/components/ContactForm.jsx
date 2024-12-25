import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent default form submission
    
        const dataToSend = {
            name,
            email,
            dob,
            gender,
            city,
            state,
            message
        };
    
        try {
            const response = await axios.post('http://localhost:4001/contactform', dataToSend);
            alert(response.data.message);  // Display success message from backend
        } catch (error) {
            console.error(error);
            alert('Something went wrong. Please try again!');
        }
    };
    
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20px px-4 flex flex-col md:flex-row py-10">
            <form onSubmit={handleSubmit}>
                <h3 className="font-bold text-lg">Sign Up</h3>

                {/* Name and Email */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block">Name</label>
                        <input
                            type="text"
                            name="fullname"
                            id="name"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            placeholder="Enter Your Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Date of Birth and Gender */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                        <label htmlFor="dob" className="block">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block">Gender</label>
                        <div className="flex gap-4">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="mr-2"
                                    checked={gender === 'male'}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="mr-2"
                                    checked={gender === 'female'}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                Female
                            </label>
                        </div>
                    </div>
                </div>

                {/* City and State */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                        <label htmlFor="city" className="block">City</label>
                        <select
                            name="city"
                            id="city"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        >
                            <option value="" disabled>Select your city</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="state" className="block">State</label>
                        <select
                            name="state"
                            id="state"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="" disabled>Select your state</option>
                            <option value="california">California</option>
                            <option value="texas">Texas</option>
                            <option value="florida">Florida</option>
                        </select>
                    </div>
                </div>

                {/* Message */}
                <div className="mt-4 space-y-2">
                    <label htmlFor="message" className="block">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className="w-full px-3 py-2 border rounded-md outline-none"
                        placeholder="Enter your message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="flex justify-around mt-4">
                    <button
                        type="submit"
                        className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-600 duration-300"
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
