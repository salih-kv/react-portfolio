import React from 'react'
import "../reset.css";
import '../styles/Hero.css'

import TypeWriterEffect from 'react-typewriter-effect';


function Hero() {
    return (
        <div>
            <section className="hero-section" id="home">
                <div className="container-xl">
                    <div className="row">
                        <div className="col hero-text">
                            <span>Hi, I'm</span>
                            <TypeWriterEffect
                                textStyle={{ fontFamily: 'Segoe UI' }}
                                startDelay={100}
                                cursorColor="black"
                                text="Mohammed Salih"
                                typeSpeed={100}
                                hideCursorAfterText={true}
                            />
                            {/* <h1>Mohammed Salih</h1> */}
                            <h3>Full Stack Developer</h3>
                            <p>From concept to deployment, delivering top-notch web solutions that exceed expectations</p>
                            <div className="hero-btn-container">
                                <a href="#home" className="btn primary-btn">Download CV</a>
                                <a href="#contact" className="btn secondary-btn">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero