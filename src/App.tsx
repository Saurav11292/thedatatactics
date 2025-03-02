//import { useState } from 'react'

import About from "./AboutSection/About"
import Hero from "./HeroSection/Hero"
import Services from "./ServiceSection/Services"
import Contacts from "./ContactSection/Contacts"
import globeImage from "../asset/anirudh-Xu4Pz7GI9JY-unsplash.jpg"

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
       <div style={{
        backgroundImage: `url(${globeImage})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
       <Hero/>
       </div>
       <div><About/></div>
       <div><Services/></div>
       <div><Contacts/></div>
      </div>
    </>
  )
}

export default App
