import "./Contact.css";
import { useContext } from "react";
import Tel from "../../src/img/phone.png"
import Mail from "../../src/img/email.png"
import Add from "../../src/img/address.png"
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from '../Context';


function Contact() {
    const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_8jsz0pt', 'template_hdbrpyo', formRef.current, 'user_devChIKmJegezxEajMlTw')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="contact">
            {/* <div className="contact-bg"></div> */}
                    <div className="wrapper">
                        <div className="contact-left">
                            <h1 className="c-title">Let's discuss about your projects</h1>
                            <div className="info">
                                <div className="info-item">
                                    <img src={Tel} alt="" className="info-img" />
                                    <p className="contact-p">+91 9591405749</p>
                                </div>
                                <div className="info-item">
                                    <img src={Mail} alt="" className="info-img" />
                                    <p className="contact-p">pradeepbb004@gmail.com</p>
                                </div>
                                <div className="info-item">
                                    <img src={Add} alt="" className="info-img" />
                                    <p className="contact-p">Bangalore, India</p>
                                </div>
                            </div>

                        </div>
                        <div className="contact-right">
                            <p className="c-desc"><b>Hi! Thank you for checking out my website</b> Lets get in touch. Always available for
                                     the right oppurtunity to learn and upskill myself to deliver the best products</p>
                              <form ref={formRef} onSubmit={handleSubmit}>
                                  <input style={{backgroundColor: darkMode ? "#222" : "white", color:darkMode &&"white"}} type="text" placeholder="Your Name" name="user_name" className="c-input" required />
                                  <input style={{backgroundColor: darkMode ? "#222" : "white", color:darkMode &&"white"}} type="text" placeholder="Your Email" name="user_email" className="c-input" required />
                                  <input style={{backgroundColor: darkMode ? "#222" : "white", color:darkMode &&"white"}} type="text" placeholder="Subject" name="user_subject" className="c-input" />
                                  <textarea style={{backgroundColor: darkMode ? "#222" : "white", color:darkMode &&"white"}} rows="6" placeholder="Your Message" name="message"></textarea>
                                  <button className="btn">Submit</button>
                                  </form>
                                  {done && <h2 style={{color:"#34BE82"}}>Thank you for showing interest in my work i would like to connect you soon</h2>}

                        </div>

                    </div>
            
        </div>
    )
}

export default Contact
