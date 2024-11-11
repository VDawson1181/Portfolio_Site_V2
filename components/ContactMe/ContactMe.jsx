import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import './contactMe.css'

const ContactMe = () => {
  return (
    <>
      <div className="contactMe"> 
        <h1>Contact Info</h1>

        <ul>
          <li>Email: <a href="mailto:VDawson647@gmail.com">VDawson647@gmail.com</a></li>
          <li>Phone: (347.605.3414)</li>
          <li>
            <p><a href="https://www.linkedin.com/in/vdawson647/"  target="_blank"><FaLinkedinIn /></a></p>
            <p>Profile</p>
          </li>
        </ul>
        
      </div>
    </>
  )
}

export default ContactMe