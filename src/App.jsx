import { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// image import
import rewardsScr from './assets/rewards_scr.png'
import woodlockedLogo from './assets/woodlocked_Scr.png'
import prizeMatcherLogo from './assets/prizeMatcher_Scr.png'
import moneyDropLogo from './assets/moneyDrop_Scr.png'
import moneyTreeLogo from './assets/moneyTree_Scr.png'
import impInfoLogo from './assets/impInfo_Scr.png'
import makeItCountLogo from './assets/makeItCount_Scr.png'
import winTonightLogo from './assets/win1MMTonight_Scr.png'
import dayOfDealsLogo from './assets/dayOfdeals_Scr.png'
import prizePayTransLogo from './assets/prizePayTrans_Scr.png'
import outrunLogo from './assets/outrun_Scr.png'
import bubblesLogo from './assets/bubbles_Scr.png'
import jokesLogo from './assets/dadJoke_Scr.png'
import vdResume from '/VDawson647_Resume.pdf'
import DigitalClockApp from '../components/DigitalClock/DigitalClockApp'
import Card from './Card'

import './App.css'

function App() {
    //Random Image -- https://picsum.photos/150/150

    const professional = [
      {name: "PCH Rewards", copy: "PCH Rewards Site", url: "https://rewards.pch.com/", isValid: true, image: rewardsScr},
      {name: "Prize Matcher", copy: "Publishers Clearing House Interactive Prize Component", url: "https://vdawson1181.github.io/portfolio-files/PrizeMatcher_Component/pm_LB_Component.html", isValid: true, image: prizeMatcherLogo},
      {name: "Woodlocked", copy: "Construction Company Site", url: "https://vdawson1181.github.io/WoodlockedProj/index.html", isValid: true, image: woodlockedLogo},
      {name: "Money Drop", copy: "Publishers Clearing House E-Commerce Landing Page", url: "https://vdawson1181.github.io/portfolio-files/MoneyDrop/page1.html", isValid: true, image: moneyDropLogo},
      {name: "Money Tree", copy: "Publishers Clearing House E-Commerce Component", url: "https://vdawson1181.github.io/portfolio-files/money-tree-OB-addOn/preview.html", isValid: false, image: moneyTreeLogo},
      {name: "Important Info", copy: "Publishers Clearing House E-Commerce Landing Page", url: "https://vdawson1181.github.io/portfolio-files/Important_Info/page1.html", isValid: false, image: impInfoLogo},
      {name: "Make It Count", copy: "Publishers Clearing House E-Commerce Landing Page", url: "https://vdawson1181.github.io/portfolio-files/Make_It_Count/page1.html", isValid: true, image: makeItCountLogo},
      {name: "Win 1MM Tonight", copy: "Publishers Clearing House E-Commerce Landing Page", url: "https://vdawson1181.github.io/portfolio-files/Win_1MM_Tonight_V13/page1.html", isValid: true, image: winTonightLogo},
      {name: "Day of Deals V4", copy: "Publishers Clearing House E-Commerce Landing Page", url: "https://vdawson1181.github.io/portfolio-files/Day_Of_Deals_V4/page1.html", isValid: false, image: dayOfDealsLogo},
      {name: "Prize Payment Transaction", copy: "Publishers Clearing House E-Commerce Landing Page", url: "https://vdawson1181.github.io/portfolio-files/Prize_Payment_Trans_V3/page1.html", isValid: false, image: prizePayTransLogo},
    ];
    // const projects = [
    //   {name: "Outrun Banner", copy: "Animated Proof Of Concept", url: "https://vdawson1181.github.io/portfolio-files/Outrun/page1.html", isValid: true, image: outrunLogo},
    //   {name: "GSAP Bubbles Demo", copy: "Animated Proof Of Concept", url: "https://vdawson1181.github.io/portfolio-files/ParticlesDemo_3/Bubbles.html", isValid: true, image: bubblesLogo},
    //   {name: "Dad Joke Generator", copy: "Simple page that pulls a joke from an API. Resets in 24 Hrs", url: "https://vdawson1181.github.io/portfolio-files/Dad_Joke_Gen/dad_Joke_API.html", isValid: true, image: jokesLogo},
    // ];
  

  const [count, setCount] = useState(0)
  const [view, setView] = useState(false)

  const handleToggle = () => {
    setView(!view);
  }
  

  return (
    <>
        {/* <DigitalClockApp type={1}></DigitalClockApp> */}
        {/* <DigitalClockApp type={2}></DigitalClockApp> */}
        
      <section id="MainPage">
        <div className="mainHeader">
          <h1>Val Dawson</h1>
          <h2>Front-End Developer</h2>
        </div>
        <ul className="infoRundown">
          <li>
            <p><a href="https://www.linkedin.com/in/vdawson647/"  target="_blank"><FaLinkedinIn /></a></p>
            <p>LinkedIn</p>
          </li>
          <li>
            <p><a href={vdResume} download="VDawson_Resume"><RiFilePaper2Line /></a></p>
            <p>Resume</p>
          </li>
          <li>
            <p><a onClick={handleToggle}><FaRegFolderOpen /></a></p>
            <p>Portfolio</p>
          </li>
          <li>            
            <p><a href="mailto:VDawson647@gmail.com"><MdContactMail /></a></p>
            <p>Contact</p>
          </li>
        </ul>
        <div className="mainDescription">
          <p>Hi, I'm Valmon Dawson — A UI/UX centered Front-End Developer</p>
          <p>With over 15 years of experience in building dynamic, user-focused eCommerce solutions, I specialize in transforming complex challenges into seamless digital experiences. My expertise spans across UI/UX design, front-end development, and team leadership, with a proven history of delivering high-impact projects that drive both revenue and engagement.</p>
          <p>I have successfully developed eCommerce landing pages and email marketing campaigns that reached millions of users and generated significant revenue. I'm passionate about collaborating with cross-functional teams to craft scalable, engaging solutions using technologies like HTML5, CSS3, JavaScript, React, and GSAP.</p>
          <p>Browse through my work to explore my experiences in creating winning contest-driven solutions, and see how I've helped design interactive, high-conversion elements that deliver real results.</p>
        </div>


      </section>
      <section id="portfolio" className={view ? 'active':'inactive'}>
        {/* <a className="portfolio_close" onClick={handleToggle}>X</a> */}
        <div id="cardContainer">
          <h1>Portfolio</h1>
          {professional.length > 0 && <Card items={professional} category="Professional Work"/>}
          {/* {projects.length > 0 && <Card items={projects} category="Personal Projects"/>} */}
        </div>
      </section>
      {/* <dialog id="contactme">
        <button>Close</button>
        <h1>Contact Me</h1>
        <p>E-Mail: <a href="mailto:VDawson647@gmail.com">VDawson647@gmail.com</a></p>
      </dialog> */}



      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
