import React from 'react'
import pp from '../assets/2-removebg.png'
import resume from '../assets/resume.pdf'

export const Hero = () => {
  return (
    <section className="section1 grid">
          <div className="left">
            <img src={pp} alt="myimage" />
          </div>
          <div className="right header">
            <div>
              <h2 className="name">Sushil Badal</h2>
              <p className="tag">Web Developer</p>
            </div>

            <a href={resume} download>
              <button>Download resume
                <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>

        </section>
  )
}
