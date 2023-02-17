import React from 'react'

export const Contact = () => {
    return (
        <section className="section6 header" id="contact" >
            <h1 className="title">Get in Touch</h1>

            <div className="socials header">
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>

            <h1>OR</h1>

            <div className="email-section header">
                <p>reach out over email</p>
                <div className="email">
                    <a href="mailto:sushilbadal123@gmail.com">sushilbadal123@gmail.com</a>
                    <div className="send">
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>

            </div>
        </section>
    )
}
