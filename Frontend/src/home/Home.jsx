import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Tempfooter'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Freebook/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default Home
