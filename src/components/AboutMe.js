import React from 'react'
import pp from '../assets/2-removebg.png'

export const AboutMe = () => {
    return (
        < section className="section5 header" id="about" >
            <h1 className="title">About me</h1>
            <div className="about-container header">
                <div className="left header">
                    <div className="bg"></div>
                    <img src={pp} alt="" />
                </div>

                <div className="right header">
                    <h1>Sushil Badal</h1>
                    <p>I was born in Nepal and currently living in Sydney, Australia.</p>

                    <p>Sydney, Australia</p>

                    <a href="#">Connect with me</a>

                    <div className="header">
                        <div className="tag">Interests</div>
                        <div>
                            <span>Coding</span>
                            <span>Reading</span>
                            <span>Sports</span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
