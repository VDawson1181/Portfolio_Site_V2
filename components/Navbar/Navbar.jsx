import React from 'react'
import { useState } from 'react'
import vdResume from '/VDawson647_Resume.pdf'
import { IoHomeOutline } from "react-icons/io5";

import { RiFilePaper2Line } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import './Navbar.css'


const Navbar = (props) => {

  return (
    <>
      <ul className="infoRundown">
        <li onClick={props.mainVisible}>
          <p>
            {/* <a href={vdResume} download="VDawson_Resume"><RiFilePaper2Line /></a> */}
            <IoHomeOutline />
          </p>
          <p>Home</p>
        </li>
        <li onClick={props.resumeClick}>
          <p>
            {/* <a href={vdResume} download="VDawson_Resume"><RiFilePaper2Line /></a> */}
            <RiFilePaper2Line />
          </p>
          <p>Resume</p>
        </li>
        <li onClick={props.portfolioClick}>
          <p>
            {/* <a onClick={() => handleToggle()}><FaRegFolderOpen /></a> */}
            <FaRegFolderOpen />
          </p>
          <p>Portfolio</p>
        </li> 
        <li onClick={props.contactMeClick}>            
          <p>
            {/* <a href="mailto:VDawson647@gmail.com"><MdContactMail /></a> */}
            <MdContactMail />
          </p>
          <p>Contact</p>
        </li>
      </ul>
    </>
  )
}

export default Navbar