import React from "react";
import info from '../Info.json';
import ContactForm from './ContactForm';
import { IoPhonePortraitOutline, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

const Contact = (props) => {
    return(
        <div id="Contact" className="contact snap" ref={props.refp}>
            <h3 >Contact</h3>
            <div className="contactContainer">
                <div className="contactInfo">
                    <div>
                        <p><IoMailOutline /></p>
                        <a href={`mailto:${info.contact.email}`}>{info.contact.email}</a>
                    </div>
                    <br/>
                    <div>
                        <p><IoLogoLinkedin /></p> 
                        <a href={info.contact.linkedin}>@rhodanc</a>
                    </div>
                    <br/>
                    <div>
                        <p><IoPhonePortraitOutline /></p> 
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