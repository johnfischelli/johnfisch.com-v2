'use client'

import { useEffect } from 'react';
import Typed from 'typed.js';

const Typing = () => {
    useEffect(() => {
        const subtitles = [
            'Software Engineer',
            'Avid Rocket League Player',
            'Sci fi literature addict',
            'Occasional Investor',
            'Sometimes is kind of funny',
            'Still hasn\'t written THAT blog post',
            'Expert Impostor Syndrome Haver',
            'Best known for funny last name',
            'Biggest Jeff Goldblum fan',
            'Never photogenic',
            'Has never used an Android phone',
            'Autodidactic, freestyle, radical'
        ];
        
        const typed = new Typed(".sub-titles", {
            strings: subtitles,
            typeSpeed: 30,
            shuffle: true,
            loop: true,
            backDelay: 7000,
            showCursor: true
        });
        
        return () => typed.destroy();
    }, [])

    return (
        <p className='my-8 text-lg'><span className="sub-titles"></span></p>
    )
}

export default Typing;