import React from 'react'
import ContactForm from './ContactForm.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Tempfooter.jsx'

function Contact() {
  return (
    <>
    <Navbar/>
      <div className="max-w-screen-2xl container mx-auto md:px-20px px-4 flex flex-col md:flex-row py-10">
      
      <ContactForm/>
      </div>
      <Footer/>
    </>
    
  )
}

export default Contact
