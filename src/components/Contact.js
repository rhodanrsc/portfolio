import React from "react";
import info from '../Info.json';
import ContactForm from './ContactForm';
import { IoPhonePortraitOutline, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

const Contact = (props) => {
    return(
        <div id="Contact" className="contact snap" ref={props.refp}>
            <h3 id="header">Contact</h3>
            <div id='contactContainer' className="contactContainer">
                <h3>Reach out about any opportunities!</h3>
                <br/>
                <div className="contactInfo" id="contactInfo">
                    
                    <div>
                        <p><IoMailOutline id="icon" /></p>
                        <a href={`mailto:${info.contact.email}`}>{info.contact.email}</a>
                    </div>
                    <br/>
                    <div>
                        <p><IoLogoLinkedin id="icon" /></p> 
                        <a href={info.contact.linkedin}>@rhodanc</a>
                    </div>
                    <br/>
                    <div>
                        <p><IoPhonePortraitOutline id="icon" /></p> 
                        <a href={`tel:15878769011`}>{info.contact.phone}</a>
                    </div>
                    
                </div>

                <div className="divider"></div>

                <ContactForm />  
            </div>
                      
        </div>
    );
}

export default Contact;