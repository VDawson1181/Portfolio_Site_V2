import React from 'react';
import vdResume from '/VDawson647_Resume.pdf'
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <ul className="infoRundown">
        <li>
          <p><a href="https://www.linkedin.com/in/vdawson647/"  target="_blank"><FaLinkedinIn /></a></p>
          <p>LinkedIn</p>
        </li>
        {/* <li>
          <p><a href={vdResume} download="VDawson_Resume"><RiFilePaper2Line /></a></p>
          <p>Resume</p>
        </li>
        <li>
          <p><a><FaRegFolderOpen /></a></p>
          <p>Portfolio</p>
        </li> */}
        <li>            
          <p><a href="mailto:VDawson647@gmail.com"><MdContactMail /></a></p>
          <p>Contact</p>
        </li>
      </ul>
    </>
  )
}

export default Navbar