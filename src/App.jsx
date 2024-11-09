import React, {useRef} from 'react';
// import DigitalClockApp from '../components/DigitalClock/DigitalClockApp'
import PortfolioApp from '../components/Portfolio/PortfolioApp';
import Navbar from "../components/Navbar/Navbar";
import Resume from '../components/Resume/Resume';
import './App.css'

function App() {
  //Random Image -- https://picsum.photos/150/150

  return (
    <>
        {/* <DigitalClockApp type={1}></DigitalClockApp> */}
        {/* <DigitalClockApp type={2}></DigitalClockApp> */}
        
      <section id="MainPage">
        <div className="mainHeader">
          <h1>Val Dawson</h1>
          <h2>Front-End Developer</h2>
        </div>
        <Navbar/>
        <div className="mainDescription">
          <p>Hi, I'm Valmon Dawson — A UI/UX centered Front-End Developer</p>
          <p>With over 15 years of experience in building dynamic, user-focused eCommerce solutions, I specialize in transforming complex challenges into seamless digital experiences. My expertise spans across UI/UX design, front-end development, and team leadership, with a proven history of delivering high-impact projects that drive both revenue and engagement.</p>
          <p>I have successfully developed eCommerce landing pages and email marketing campaigns that reached millions of users and generated significant revenue. I'm passionate about collaborating with cross-functional teams to craft scalable, engaging solutions using technologies like HTML5, CSS3, JavaScript, React, and GSAP.</p>
          <p>Browse through my work to explore my experiences in creating winning contest-driven solutions, and see how I've helped design interactive, high-conversion elements that deliver real results.</p>
        </div>
      </section>

      <Resume/>
      <PortfolioApp/>

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
