import React from 'react'

export const Header = ({setShowScreen}) => {
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
                <a onClick={() => setShowScreen("")} href="#!">Home</a>
              </li>
              <li>
                <a onClick={() => setShowScreen("skills")} href="#!">Skills</a>
              </li>
              <li>
                <a onClick={() => setShowScreen("projects")} href="#!">Projects</a>
              </li>
              <li>
                <a onClick={() => setShowScreen("about")} href="#!">About</a>
              </li>
              <li>
                <a onClick={() => setShowScreen("contact")} href="#!">Contact</a>
              </li>

            </ul>
          </div>
        </header>
    </>
  )
}
