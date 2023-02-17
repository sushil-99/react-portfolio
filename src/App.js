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
  return (
    <div>
      {/* <!-- DARK_MODE_BUTTON --> */}
      <DarkMode />

      <div className="wrapper">
        {/* <!-- header section --> */}
        <Header />

        {/* <!-- hero section --> */}

        <Hero />


        {/* <!-- info section --> */}

        <Info />

        {/* <!-- skills section --> */}

        <Skills/>

        {/* <!-- projects section --> */}

        <Projects/>

        {/* <!-- about me section --> */}

        <AboutMe/>

        {/* <!-- contact section --> */}

        <Contact/>


        {/* <!-- footer section --> */}
        <Footer/>

        <ScrollBtn/>
       
      </div >
    </div>
  );
}

export default App;
