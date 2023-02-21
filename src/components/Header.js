import React from 'react'
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <>
         <header className="header primary-header">
          <div className=" header logo">
           <Link to="/"><h1>Sushil Badal</h1></Link> 
            <div>
              <h3 className="line">Web Developer</h3>
            </div>
          </div>
          <div className="right">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fa-solid fa-bars"></i>
            </label>
            <ul className=" header primary-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about-me">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>
          </div>
        </header>
    </>
  )
}
