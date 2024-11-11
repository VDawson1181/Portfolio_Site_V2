import React from 'react'
import { useState } from 'react'
// image import
import rewardsScr from '../../src/assets/rewards_scr.png'
import woodlockedLogo from '../../src/assets/wlocked_Scr.png'
import prizeMatcherLogo from '../../src/assets/prizeMatcher_Scr.png'
import moneyDropLogo from '../../src/assets/moneyDrop_Scr.png'
import moneyTreeLogo from '../../src/assets/moneyTree_Scr.png'
import impInfoLogo from '../../src/assets/impInfo_Scr.png'
import makeItCountLogo from '../../src/assets/makeItCount_Scr.png'
import winTonightLogo from '../../src/assets/win1MMTonight_Scr.png'
import dayOfDealsLogo from '../../src/assets/dayOfdeals_Scr.png'
import prizePayTransLogo from '../../src/assets/prizePayTrans_Scr.png'
import outrunLogo from '../../src/assets/outrun_Scr.png'
import bubblesLogo from '../../src/assets/bubbles_Scr.png'
import jokesLogo from '../../src/assets/dadJoke_Scr.png'
import Card from '../../src/Card'
import './portfolio.css'

const PortfolioApp = () => {

    const professional = [
        {
            isValid: true, 
            name: "PCH Rewards", 
            copy: "PCH Rewards Site", 
            url: "https://rewards.pch.com/", 
            image: rewardsScr
        },
        {
            isValid: true, 
            name: "Prize Matcher", 
            copy: "Publishers Clearing House Interactive Prize Component", 
            url: "https://vdawson1181.github.io/portfolio-files/PrizeMatcher_Component/pm_LB_Component.html", 
            image: prizeMatcherLogo
        },
        {
            isValid: true, 
            name: "Woodlocked", 
            copy: "Construction Company Site", 
            url: "https://vdawson1181.github.io/WoodlockedProj/index.html", 
            image: woodlockedLogo
        },
        {
            isValid: true, 
            name: "Money Drop", 
            copy: "Publishers Clearing House E-Commerce Landing Page", 
            url: "https://vdawson1181.github.io/portfolio-files/MoneyDrop/page1.html", 
            image: moneyDropLogo
        },
        {
            isValid: false, 
            name: "Money Tree", 
            copy: "Publishers Clearing House E-Commerce Component", 
            url: "https://vdawson1181.github.io/portfolio-files/money-tree-OB-addOn/preview.html", 
            image: moneyTreeLogo
        },
        {
            isValid: false, 
            name: "Important Info", 
            copy: "Publishers Clearing House E-Commerce Landing Page", 
            url: "https://vdawson1181.github.io/portfolio-files/Important_Info/page1.html", 
            image: impInfoLogo
        },
        {
            isValid: true, 
            name: "Make It Count", 
            copy: "Publishers Clearing House E-Commerce Landing Page", 
            url: "https://vdawson1181.github.io/portfolio-files/Make_It_Count/page1.html", 
            image: makeItCountLogo
        },
        {
            isValid: true, 
            name: "Win 1MM Tonight", 
            copy: "Publishers Clearing House E-Commerce Landing Page", 
            url: "https://vdawson1181.github.io/portfolio-files/Win_1MM_Tonight_V13/page1.html", 
            image: winTonightLogo
        },
        {
            isValid: false, 
            name: "Day of Deals V4", 
            copy: "Publishers Clearing House E-Commerce Landing Page", 
            url: "https://vdawson1181.github.io/portfolio-files/Day_Of_Deals_V4/page1.html", 
            image: dayOfDealsLogo
        },
        {
            isValid: false, 
            name: "Prize Payment Transaction", 
            copy: "Publishers Clearing House E-Commerce Landing Page", 
            url: "https://vdawson1181.github.io/portfolio-files/Prize_Payment_Trans_V3/page1.html", 
            image: prizePayTransLogo
        },
      ];
      // const projects = [
      //   {name: "Outrun Banner", copy: "Animated Proof Of Concept", url: "https://vdawson1181.github.io/portfolio-files/Outrun/page1.html", isValid: true, image: outrunLogo},
      //   {name: "GSAP Bubbles Demo", copy: "Animated Proof Of Concept", url: "https://vdawson1181.github.io/portfolio-files/ParticlesDemo_3/Bubbles.html", isValid: true, image: bubblesLogo},
      //   {name: "Dad Joke Generator", copy: "Simple page that pulls a joke from an API. Resets in 24 Hrs", url: "https://vdawson1181.github.io/portfolio-files/Dad_Joke_Gen/dad_Joke_API.html", isValid: true, image: jokesLogo},
      // ];

  return (
    <>
        <div className="portfolio">
            {/* <a className="portfolio_close" onClick={handleToggle}>X</a> */}
            <div className="cardContainer">
            <h1>Portfolio</h1>
            {professional.length > 0 && <Card items={professional} category="Professional Work"/>}
            {/* {projects.length > 0 && <Card items={projects} category="Personal Projects"/>} */}
            </div>
        </div>
    </>
  )
}

export default PortfolioApp