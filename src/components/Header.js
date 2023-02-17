import React from 'react'

export const Header = () => {
  return (
    <>
         <header className="header primary-header">
          <div className=" header logo">
            <h1>Sushil Badal</h1>
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </header>
    </>
  )
}
