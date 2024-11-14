import React from 'react'
import { useState } from 'react'
// const images = require.context('../../src/assets/', true);
// const imageList = images.keys().map(image => images(image));

// image import
import rewardsScr from '../../src/assets/rewards_Repo/rewards_scr1.png'
import rewardsCombo from '../../src/assets/rewards_Repo/rewards_Main_scr1.png'

import prizeMatcherScr from '../../src/assets/prizeMatcher_Repo/prizeMatcher_Scr.png'
import prizeMatcherCombo from '../../src/assets/prizeMatcher_Repo/PrizeMatcher_Main_Scr1.png'

import woodlockedScr from '../../src/assets/woodlocked_Repo/wlocked_Scr.png'
import woodlockedCombo from '../../src/assets/woodlocked_Repo/wlocked_Main_Scr1.png'

import moneyDropScr from '../../src/assets/moneyDrop_Repo/MoneyDrop_Main_Scr1.png'
import moneyDropCombo from '../../src/assets/moneyDrop_Repo/MoneyDrop_Main_Scr2.png'

import makeItCountScr from '../../src/assets/MakeItCount_Repo/MIC_Main_Scr1.png'
import makeItCountCombo from '../../src/assets/MakeItCount_Repo/MIC_Main_Scr2.png'

import winTonightMain from '../../src/assets/Win_Tonight_Repo/WinTonight_Main_Scr2.png'
import winTonightCombo from '../../src/assets/Win_Tonight_Repo/WinTonight_Main_Scr1.png'

import portfolioMain from '../../src/assets/VDawson647_V1/VDaw_Main_Scr2.png'
import portfolioCombo from '../../src/assets/VDawson647_V1/VDaw_Main_Scr1.png'


import Card from '../../src/Card'
import './portfolio.css'

const PortfolioApp = () => {

    const professional = [
        {
            isValid: true, 
            id:"rewards",
            name: "PCH Rewards", 
            copy: "The PCH Rewards center. Their rewards program lets you turn Tokens you earn into entries to win prizes you want like cash and gift cards, Ford vehicles, premium merchandise and so much more. The more Tokens you redeem the more chances you have to win big.", 
            descrip: "This is the PCH rewards site redesign. It's a space for our users to come to and turn the tokens that they've accrued entering contests and playing our games into more prize winning opportunities. The business was looking to this site to be the source of some much needed revenue. Our team was tasked with bringing a brand new design to life with an extremely tight timeline. We were able to minimize the amount of issues and rework that came up, and as a result we weren't too far off from our original launch date. The site also saw a 50% lift to the amount of traffic from the previous design. ",
            url: "https://rewards.pch.com/", 
            image: [rewardsScr,rewardsCombo]
        },
        {
            isValid: true,
            id:"pmatcher", 
            name: "Prize Matcher", 
            copy: "This component asks our users to complete a quiz in order to redeem their tokens for a prize", 
            descrip: "This prize matcher component is a fun bonus interactive element for our longtime users that are logged into the rewards site. It asks the user 6 questions, and assigns them 4 gift cards (out of a list of 15) that they can redeem their tokens on. This component hasn't launched yet.",
            url: "https://vdawson1181.github.io/portfolio-files/PrizeMatcher_Component/pm_LB_Component.html", 
            image: [prizeMatcherScr,prizeMatcherCombo]
        },
        {
            isValid: true, 
            id: "wlocked",
            name: "Woodlocked", 
            copy: "An exotic lumber, and construction company - focusing on the crafting of tables, furniture, light fixtures, decks, siding, masonry, and roofing services.", 
            descrip: "Woodlocked's company site highlighted their two businesses. An exotic lumber company, and a construction one. I collaborated with the owners, and their design team to put together a site that highlighted both the custom design, and fabrication of exotic wood product aspects of their business. When you reach the homepage, there's a split option to visit a subpage for each side of the business.",
            url: "https://vdawson1181.github.io/WoodlockedProj/index.html", 
            image: [woodlockedScr,woodlockedCombo]
        },
        {
            isValid: true, 
            id: "mdropped",
            name: "Money Drop", 
            copy: "A fun interactive prize opportunity landing page that allows users to compete for entries into a contest drawing. The more 'packages' that you collect, the larger the prize you'll be eligible to win!", 
            descrip: "Our team was tasked with coming up with more ways to engage with our customers. We had a trend of 'gamifying' things so that they can stay on our pages for a longer time. I came up with a proof of concept that morphed into this landing page. My original proof of concept was meant to be skinnable. Change the logo, change the background, change the element that the user had to select, and you had a whole new game. This approach prooved to be successful, as Money drop elicited many different versions.",
            url: "https://vdawson1181.github.io/portfolio-files/MoneyDrop/page1.html", 
            image: [moneyDropScr,moneyDropCombo]
        },
        {
            isValid: true, 
            id: "makecount",
            name: "Make It Count", 
            copy: "PCH eCommerce Landing Page that featured the Prize Patrol, and segmented savings messages to entice our users to buy more of our product offerings.", 
            descrip: "I worked with a creative team (Writer and Designer) to craft this experience. The process often involved a brainstorming session, and then me coming up with some kind of a proof of concept based on the ideas generated during the meeting. This landing page was a bit more straightforward, but there were times when we had to adjust the design to accomodate an alternate or even better idea based on any hardships that were discovered.",
            url: "https://vdawson1181.github.io/portfolio-files/Make_It_Count/page1.html", 
            image: [makeItCountScr,makeItCountCombo]
        },
        {
            isValid: true, 
            id: "win1MM",
            name: "Win 1MM Tonight", 
            copy: "PCH eCommerce Landing Page that played up the urgency of the entry with a countdown clock.", 
            descrip: "PCH eCommerce Landing Page that featured a timed entry. Our timed eCommerce pages sometimes featured different contests being offered based on how close you were to the end of the countdown. I often had to work with our marketing and operations teams to ensure that the dates and contest were correct for the timeframe they were going out in. They also had to match the e-mail counterpart which sometimes had static information in it.",
            url: "https://vdawson1181.github.io/portfolio-files/Win_1MM_Tonight_V13/page1.html", 
            image: [winTonightMain,winTonightCombo]
        },
        {
            isValid: true, 
            id: "PortfolioV1",
            name: "Val Dawson's Portfolio Site -- V1", 
            copy: "The first version of my personal portfolio site...", 
            descrip: "Wanted to put together a site that showcased the skills that i've amassed over the years and some of the work that I had been doing professionally. As you can see the first go around didn't have the best design. As a result, i immediately started on V2. Receiving harsh feed back is critical to ironing out any flaws that may come up with your work. I'm lucky to have great friends and colleagues that are willing to hand down some 'tough love' in order to get me to pivot. I'll continue tinkering and asking for feedback. Everything's a process right?",
            url: "https://vdawson1181.github.io/Portfolio_Site/", 
            image: [portfolioMain,portfolioCombo]
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

        {/* <div className='imageGallery'>
            {imageList.map((image, index) => (
                <img key={index} src={image.default} alt={`image-${index}`} />
            ))}
        </div> */}
    </>
  )
}

export default PortfolioApp