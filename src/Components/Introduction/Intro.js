import React from 'react'
import "./Intro.css"
import ME from "../../img/web.png"
import { Link } from "react-router-dom"

function Intro() {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="wrapper">
                <div className='img-container'>
        <img src={ME} alt="" className="img-right" />

                </div>

                    <div className="intro-left-wrapper">
                        <h2 className="intro-text">Hello, My Name is</h2>
                        <h1 className="intro-name">Pradeep B B</h1>
                        <div className="wrapper-title">
                            <div className="wrapper-title-text">
                                <div className="title-item">Web Developer</div>
                                <div className="title-item">Frontend Developer</div>
                                <div className="title-item">ReactJs NextJs</div>
                                <div className="title-item">App Developer</div>
                                <div className="title-item">React-Native</div>
                                <div className="title-item">Backend Developer</div>
                                <div className="title-item">NodeJs Express REST API</div>
                            </div>
                        </div>
                        <p className="title-desc">
                      I am Desigining developing and implementing web applications , cross platform Mobile Applications and working across Fullstack .
                       I am dedicated to learning from more seasoned technologies
                        </p>
                        <div className='links'>
                        <Link to="/contact">
                        <button className='btn-contact'>Hire Me</button>
                        </Link>
                        <a href="https://github.com/deepbb" target="_blank" rel="noreferrer">
                        <button className='btn-contactGit'>Github</button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-right">
              {/* <div className="right-bg-front"></div>

              <div className="right-bg"></div> */}
               {/* <img src={Me} alt="" className="img-right" /> */}

            </div>
        </div>
    )
}

export default Intro
