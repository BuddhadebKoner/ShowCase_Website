import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollIndicator.css';

export default function ScrollIndicator() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to('.scrollIndicator_img', {
            scrollTrigger: {
                scroller: 'body',
                trigger: '.scrollIndicator_container',
                start: 'top 80%',
                end: 'buttom -500%',
                scrub: 2,
                markers: true,
            },
            rotation: 900,
        });
    }, []);

    return (
        <div className="scrollIndicator_container">
            <img 
                className='scrollIndicator_img'
                src="/scrollIndicater.svg" 
                alt="Scroll Indicator" 
            />
        </div>
    );
}
