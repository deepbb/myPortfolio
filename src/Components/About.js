import "./About.css";
import Profile from "../img/profile.png"
import Resume from "../img/resume.pdf"


function About() {
    return (
        <>
        <h1 className="aboutHeading">About</h1>

        <div className="about-wrapper">
        <div className="profileContainer">
            <img src={Profile} alt="" className="profile" />
            <p className="name">Pradeep B B</p>
            <p className="role">Full stack Developer</p>

        </div>
        <div className="about">
        <p className="aboutText">A software engineer who values learning and growing with people, teams, and technologies. Experienced at writing code in a high-paced environment.
        Designing and developing various web apps using variets of new technologies.Built APIs for web apps Fascinating about Mobile app development
        
        </p>
        <div className="resumeContainer">
        <a className="resumeLink" href={Resume} target="_blank" rel="noreferrer">Resume</a>
        </div>
        <h2>Skills</h2>
        <div className="skillset">
        <button className="btn1">HTML</button>
        <button className="btn2">CSS</button>
        <button className="btn3">javaScript</button>
        <button className="btn4">React</button>
        <button className="btnR">Redux</button>
        <button className="btn5">React Native</button>
         <button className="btn6">NextJs</button>
        <button className="btn7">NodeJS</button>
        <button className="btn8">Express</button>
        <button className="btn9">MongoDB</button>
        <button className="btn10">REST APIs</button>
        <button className="btn11">Bootstrap</button>
        <button className="btn12">Material UI</button>
        </div>





        </div>
           
        </div>
        </>
    )
}

export default About

