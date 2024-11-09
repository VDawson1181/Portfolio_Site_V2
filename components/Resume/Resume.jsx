import React, {useRef} from 'react'
import { FaPrint } from "react-icons/fa6";
import { useReactToPrint } from 'react-to-print'
import './resume.css'

const Resume = () => {

    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <>
        <section className="resume"> 
            <h6>Resume <button onClick={reactToPrintFn}><FaPrint /></button></h6>

            <div className="resumeInner" ref={contentRef}>
                <div className='resumeHeader'>
                    <h1>Valmon Dawson</h1>
                    <h2>Front-End Developer</h2>
                    <h3>347.605.3414</h3>
                    <h3>VDawson647@gmail.com</h3>
                    <h3>WebSiteAddr</h3>
                </div>
                <div className="resumeOverview resumeContainer">
                    <p className='subHeader'>Overview</p>
                    <hr />
                    <p className="sectionMain">Results-driven Front-End Developer with over 15 years of experience in building and managing dynamic ECommerce solutions. Proven expertise in UI/UX design, front-end technologies, and team leadership, with a demonstrated track record of delivering high-impact web applications and daily email marketing campaigns to an audience of 15.1 million, generating $125 million annually. Adept at collaborating with cross-functional teams and managing complex workflows.</p>
                </div>
                <div className="resumeSkills resumeContainer">
                    <p className='subHeader'>Skills</p>
                    <hr />
                    <ul className="sectionMain">
                        <li>
                            <p className='subHeader'>Technologies</p>
                            <p className="subCopy">HTML5, CSS3, JavaScript, PHP, React, JQuery, Laravel Blades, Greensock (GSAP), Git</p>
                        </li>
                        <li>
                            <p className='subHeader'>Tools</p>
                            <p className="subCopy">Visual Studio Code, Photoshop, Figma, Microsoft Teams, Trello, Agility</p>
                        </li>
                        <li>
                            <p className='subHeader'>Specialties</p>
                            <p className="subCopy">UI/UX Design, Lead Generation, Direct Marketing, ECommerce Development</p>
                        </li>
    
                    </ul>
                </div>
                <div className="resumeWork resumeContainer">
                    <p className='subHeader'>Work History</p>
                    <hr />
                    <ul className="sectionMain">
                        <li>
                            <p className='employerHeader'>Publishers Clearing House</p>
                            <ul>
                                <li className='employerJob'>
                                    <p className='subHeader'>Senior Front-End Developer <span>Apr. 2017 - Oct. 2024 — Jericho, NY</span></p>
                                    <ul className='responsibilityList'>
                                        <li>Created components for PCH's rewards site.</li>
                                        <li>Built ECommerce landing pages.</li>
                                        <li>Team lead for our ECommerce team.
                                            <ul>
                                                <li>Providing training & guidance to the team.</li>
                                                <li>Managed team's workflow</li>
                                            </ul>
                                        </li>
                                        <li>Created and maintained the PCH UI Team's wiki page. (Technical standards, Best practices)</li>
                                    </ul>
                                </li>
                                <li className='employerJob'>
                                    <p className='subHeader'>Front-End Developer <span>Apr. 2009 - Apr. 2017 — Port Washington, NY</span></p>
                                    <ul className='responsibilityList'>
                                        <li>Develop, modify, troubleshoot, and maintain bespoke ECommerce landing pages (packages) created with HTML5, CSS3, JavaScript, & GSAP.</li>
                                        <li>Modified, troubleshot, and maintained the continuing useability of our ECommerce landing page library.</li>
                                        <li>Work closely with the creative, legal, marketing, and operations teams to create, update, fix, and maintain our expanding library of ECommerce landing pages.</li>
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
                            <p className='subHeader'>New York City College Of Technology</p>
                            <p className="subCopy">Bachelor's of Technology <span>Sept. 2004 - Aug 2006,  Brooklyn, NY</span></p>
                            <ul className='responsibilityList'>
                                <li>Major: Computer Systems - GPA: 3.5</li>
                                <li>Areas of Concentration: Web Design and Implementation, Program Design, LAN</li>
                                <li>Accomplishments: Magna Cum Laude; Dean's List - Spring 2005 and Spring 2006</li>
                            </ul>
                        </li>
                        <li>
                            <p className='subHeader'>Borough of Manhattan Community College</p>
                            <p className="subCopy">Associate's Degree <span>Jan. 2002 - Jun. 2004,  New York, NY</span></p>
                            <ul className='responsibilityList'>
                                <li>Major: Computer Programming</li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Resume