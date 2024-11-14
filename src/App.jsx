import React, {useState} from 'react';
// import DigitalClockApp from '../components/DigitalClock/DigitalClockApp'
import Navbar from "../components/Navbar/Navbar";
import PortfolioApp from '../components/Portfolio/PortfolioApp';
import Resume from '../components/Resume/Resume';
import ContactMe from '../components/ContactMe/ContactMe';
import './reset.css'
import './App.css'

function App() {
  //Random Image -- https://picsum.photos/150/150

  // const [state, setState] = useState({
  //   portfolio: false,
  //   resume: false,
  //   contactMe: false,
  // })
  // const handleNavChange = (e) => {
  //   e.stopPropagation();
  //   const {name, value} = e.target;

  //   setState(prevState => ({
  //     ...prevState,
  //     portfolio: !state.portfolio,
  //     resume: !state.resume,
  //     contactMe: !state.contactMe
  //   }));

  // }

    const [mainVisible, setMainVisible] = useState(true)
    const [resumeVisible, setResumeVisible] = useState(true)
    const [portfolioVisible, setportfolioVisible] = useState(false)
    const [contactMeVisible, setContactMeVisible] = useState(false)

  function setAllHidden(){
    setMainVisible(false);
    setportfolioVisible(false);
    setResumeVisible(false);
    setContactMeVisible(false);
  }

  const handleMainClick = (e) => {
    e.stopPropagation();
    setAllHidden()
    setMainVisible(true)
    setResumeVisible(true)
  }
  const handleResumeClick = (e) => {
    e.stopPropagation();
    setAllHidden()
    setResumeVisible(true)
  }

  const handlePortfolioClick = (e) => {
    e.stopPropagation();
    setAllHidden()
    setportfolioVisible(true)
  }


  const handleContactMeClick = (e) => {
    e.stopPropagation();
    setAllHidden()
    setContactMeVisible(true)
  }

  return (
    <>
        {/* <DigitalClockApp type={1}></DigitalClockApp> */}
        {/* <DigitalClockApp type={2}></DigitalClockApp> */}
        
      <section id="MainPage">
        <div className="mainHeader">
          <h1>Hi, I'm Valmon Dawson</h1>
          <h2>Front-End Developer</h2>
        </div>

        <div className="navbar">
          {/* <Navbar mainVisible={handleMainClick} resumeClick={handleResumeClick} portfolioClick={handlePortfolioClick} contactMeClick={handleContactMeClick}/> */}
          <Navbar mainVisible={handleMainClick} resumeClick={handleResumeClick} portfolioClick={handlePortfolioClick} contactMeClick={handleContactMeClick}/>
        </div>

        { mainVisible && 
        
        <div className="mainDescription">
          {/* <p>Hi, I'm Valmon Dawson — A UI/UX centered Front-End Developer</p> */}
          <p>I love building things! Whether it's puzzles, super complex Lego sets, or Ikea furniture; i approach every build with a calm leveled head and a strong determination to see the build through. This extends to my professional life as well. With over 15 years of experience in building dynamic, user-focused eCommerce solutions, I specialize in transforming complex challenges into seamless digital experiences. My expertise spans across UI/UX design, front-end development, and team leadership, with a proven history of delivering high-impact projects that drive both revenue and engagement.</p>
          <p>I have successfully developed eCommerce landing pages and email marketing campaigns that reached millions of users and generated significant revenue. I'm passionate about collaborating with cross-functional teams to craft scalable, engaging solutions using technologies like HTML5, CSS3, JavaScript, React, and GSAP.</p>
          <p>Explore my experiences in building winning contest-driven solutions, and see how I've helped design interactive, high-conversion elements that deliver real results.</p>
        </div>
        }

      </section>

      { resumeVisible && <Resume/>}
      { portfolioVisible && <PortfolioApp/>}
      { contactMeVisible && < ContactMe/>}

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
