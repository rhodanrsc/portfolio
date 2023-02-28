import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import { useEffect, useState, useRef } from 'react';

const getDimensions = (ele) => {
    const {height} = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
    };
};

const unhighlight = (visible) => {
    document.querySelector('.'+visible).setAttribute('id', 'unselected');
    document.querySelector('.'+visible).setAttribute('id', 'unselected');
}

const highlight = (visible) => {
    document.querySelector('.'+visible).setAttribute('id', 'selected');
    document.querySelector('.'+visible).setAttribute('id', 'selected');
} 

const Sections = () => {
    // Highlight Nav Functionality
    const [visible, setVisible] = useState('Home');

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRef = [
        { section : "Home", ref: homeRef },
        { section : "About", ref: aboutRef },
        { section : "Skills", ref: skillsRef },
        { section : "Portfolio", ref: portfolioRef },
        { section : "Contact", ref: contactRef }
    ];

    useEffect(() => {    
        // Scroll Functionality
        const handleScroll = () => {
            const { height: homeHeight } = getDimensions(homeRef.current);
            const scrollPosition = window.scrollY + homeHeight;
            
            const selected = sectionRef.find(({ section, ref}) => {
                const ele = ref.current;
                if(ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });
            
            if (selected && selected.section !== visible) {
                setVisible(selected.section);
                unhighlight(visible);
            } else if (!selected && visible) {
                setVisible(undefined);
            } else if (visible !== undefined) {
                highlight(visible);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [visible])

    return(
        <div>
            <Home className='scroll' refp={homeRef} />
            <About className='scroll' refp={aboutRef} />
            <Skills className='scroll' refp={skillsRef} />
            <Projects className='scroll' refp={portfolioRef} />
            <Contact className='scroll' refp={contactRef} />
        </div>
    );
}

export default Sections;