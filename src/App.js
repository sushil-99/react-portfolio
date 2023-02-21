import { object } from 'prop-types';
import { useState } from 'react';
import './App.css';
// importing images

import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';

import { DarkMode } from './components/DarkMode';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Info } from './components/Info';
import { Projects } from './components/Projects';
import { ScrollBtn } from './components/ScrollBtn';
import { Skills } from './components/Skills';

function App() {

  const [showScreen, setShowScreen] = useState("")
  console.log(showScreen)

  const screens =
  {
    skills: <Skills/>,
    projects: <Projects/>,
    about: <AboutMe/>,
    contact: <Contact/>
  }

  return (
    <div>
      {/* <!-- DARK_MODE_BUTTON --> */}
      <DarkMode />

      <div className="wrapper">
        {/* <!-- header section --> */}
        <Header setShowScreen={setShowScreen} />

        {!showScreen ? (
          <>
            <Hero/>
            {Object.values(screens)}
          </>
        ): (
          screens[showScreen]
        )}



        {/* <!-- footer section --> */}
        <Footer/>

        <ScrollBtn/>
       
      </div >
    </div>
  );
}

export default App;
