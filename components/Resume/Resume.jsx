import React, {useRef} from 'react'
import { FaPrint } from "react-icons/fa6";
import { useReactToPrint } from 'react-to-print'
import './resume.css'

const Resume = () => {

    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <>
        <div className="resume"> 
            <h6>Resume <button onClick={reactToPrintFn}><FaPrint /></button></h6>

            <div className="resumeInner" ref={contentRef}>
                <div className='resumeHeader'>
                    <h1>Valmon Dawson</h1>
                    <h2>Front-End Developer</h2>
                    <h3 className="pfLink">Cell: <span>347.605.3414</span></h3>
                    <h3>Email: <a href="mailto:VDawson647@gmail.com"><span>VDawson647@gmail.com</span></a></h3>
                    <h3>LinkedIn: <a href="https://www.linkedin.com/in/vdawson647/"  target="_blank"><span>linkedin.com/in/vdawson647</span></a></h3>
                    <h3 className="pfLink">Portfolio: <span>vdawson647.dev</span></h3>
                </div>
                <div className="resumeOverview resumeContainer">
                    <p className='subHeader'>Overview</p>
                    <hr />
                    <p className="sectionMain">Results-driven Front-End Developer with over 15 years experience in creating and managing dynamic eCommerce solutions. Proficient in Front-End Technologies, UI/UX design, and workflow optimization. Proven track record in delivering high-impact web applications and daily email marketing campaigns to an audience of over 15 million people per day, generating $125 million annually.</p>
                </div>
                <div className="resumeSkills resumeContainer">
                    <p className='subHeader'>Skills</p>
                    <hr />
                    <ul className="sectionMain">
                        <li>
                            <p className='subHeader'>Technologies</p>
                            <p className="subCopy">HTML5, CSS3, JavaScript, JQuery, PHP, React, Vite, Git, Laravel Blades, Greensock (GSAP), Google Maps API</p>
                        </li>
                        <li>
                            <p className='subHeader'>Tools</p>
                            <p className="subCopy">Visual Studio Code, Photoshop, Figma, Microsoft Teams, Trello, Agility, Proprietary & Commercial Content Management Systems, Google Analytics, Salesforce Marketing Cloud Personalization</p>
                        </li>
                        <li>
                            <p className='subHeader'>Specialties</p>
                            <p className="subCopy">UI/UX Design, Front-End Development & Performance Optimization, Agile Development & Cross-Team Collaboration, SEO, Workflow Optimization & Technical Documentation</p>
                        </li>
    
                    </ul>
                </div>
                <div className="resumeWork resumeContainer">
                    <p className='subHeader'>Experience</p>
                    <hr />
                    <ul className="sectionMain">
                        <li>
                            <p className='employerHeader'>Publishers Clearing House - Front-End Developer</p>
                            <ul>
                                <li className='employerJob'>
                                    <p className='subHeader'><span>2009 - 2024 | Jericho, NY</span></p>
                                    <ul className='responsibilityList'>

                                        <li>Implemented server-side front-end components for rewards.pch.com, ensuring robust functionality and seamless user experiences.</li>
                                        <li>Collaborated with cross-functional teams to develop, troubleshoot, and maintain a library of over 150 custom eCommerce landing pages.</li>
                                        <li>Created functional Proof of concepts across various PCH properties to aid the creative and development process. </li>
                                        <li>Supported PCH.com initiatives on 3rd party marketing platforms such as Salesforce Marketing Cloud, and MoEngage.</li>
                                        <li>Onboarded, trained, and mentored the eCommerce development team, fostering professional growth and technical proficiency.</li>
                                        <li>Authored the department's technical standards and best practices, establishing a comprehensive internal wiki to streamline team workflows.</li>                                    
                                    </ul>
                                </li>
                                {/* <li className='employerJob'>
                                    <p className='subHeader'>Front-End Developer - <span>Apr. 2009 - Apr. 2017 — Port Washington, NY</span></p>
                                    <ul className='responsibilityList'>
                                        <li>Develop, modify, troubleshoot, and maintain bespoke eCommerce landing pages (packages) created with HTML5, CSS3, JavaScript, & GSAP.</li>
                                        <li>Modified, troubleshot, and maintained the continuing useability of our eCommerce landing page library.</li>
                                        <li>Work closely with the creative, legal, marketing, and operations teams to create, update, fix, and maintain our expanding library of eCommerce landing pages.</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                        <li>
                            <p className='employerHeader'>Venture Direct Worldwide - Web Producer / QA Specialist</p>
                            <ul>
                                <li className='employerJob'>
                                    <p className='subHeader'><span>2006 - 2009 | New York, NY</span></p>
                                    <ul className='responsibilityList'>
                                        <li>Developed, updated, and maintained lead-generation microsites for online educational institutions using HTML, CSS, JavaScript, JQuery, and PHP.</li>
                                        <li>Ensured the integrity of generated leads by verifying processes and resolving issues collaboratively with clients and internal teams.</li>
                                        <li>Provided training and guidance to new team members, promoting consistent adherence to quality standards.</li>

                                        {/* <li>Created, Updated, and Maintained lead-generation microsites for online schools based on client specifications using a combination of HTML/CSS/Javascript/JQuery/PHP.</li>
                                        <li>Verified the integrity of leads that were generated.</li>
                                        <li>Troubleshooting, and resolving HTTP Post issues</li>
                                        <li>Talked with clients and worked with cross functional team to resolve lead generation issues.</li>
                                        <li>Providing training & guidance to new team members.</li> */}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="resumeEducation resumeContainer">
                    <p className='subHeader'>Education</p>
                    <hr />
                    <ul className="sectionMain">
                        <li>
                            <p className='subHeader'>Bachelor's of Technology in Computer Systems</p>
                            <p className="subCopy"><span>CUNY New York City College Of Technology - 2006</span></p>
                            {/* <ul className='responsibilityList'>
                                <li>Major: Computer Systems - GPA: 3.5</li>
                                <li>Areas of Concentration: Web Design and Implementation, Program Design, LAN</li>
                                <li>Accomplishments: Magna Cum Laude; Dean's List - Spring 2005 and Spring 2006</li>
                            </ul> */}
                        </li>
                        <li>
                            <p className='subHeader'>Associate's Degree in Computer Programming</p>
                            <p className="subCopy"><span>CUNY Borough of Manhattan Community College - 2004</span></p>
                            {/* <ul className='responsibilityList'>
                                <li>Major: Computer Programming</li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Resume