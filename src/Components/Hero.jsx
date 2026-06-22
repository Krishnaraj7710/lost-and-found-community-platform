import React from 'react'
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    
        <section className="hero">
            <h1>Lost Something? Found Something?</h1>
            <h1>We help reunite them.</h1>
            <p>A hyperlocal community platform to report and recover lost &
               found items across campuses, hostels, transit, and public spaces.
            </p>
            <div className="hero-buttons">
            {/* <button className="lost-button">Report Lost Item</button> */}
            <Link to="/ReportLost" className="lost-button">Report Lost Item</Link>
            <Link to="/ReportFound" className="found-button">Report Found Item</Link>

            
            </div>
        </section>
      
    
  )
}

export default Hero
