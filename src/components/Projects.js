import React from 'react'
import projects from '../assets/3.jpg'
import { Layout } from './Layout'

export const Projects = () => {
    return (
        <Layout>
            < section className="section4 header" id="projects" >
            <h1 className="title">My Projects</h1>

            <div className="projects-container grid">
                <div className="project-card header">
                    <div className="top">
                        <img src={projects} alt="" />
                    </div>

                    <div className="bottom">
                        <p>January 4, 2023</p>
                        <p>E-commerce Full Stack web application Built using React</p>
                    </div>
                </div>
                <div className="project-card header">
                    <div className="top">
                        <img src={projects} alt="" />
                    </div>

                    <div className="bottom">
                        <p>January 4, 2023</p>
                        <p>E-commerce Full Stack web application Built using React</p>
                    </div>
                </div>
                <div className="project-card header">
                    <div className="top">
                        <img src={projects} alt="" />
                    </div>

                    <div className="bottom">
                        <p>January 4, 2023</p>
                        <p>E-commerce Full Stack web application Built using React</p>
                    </div>
                </div>
            </div>
        </section >
        </Layout>
        
    )
}
