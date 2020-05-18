import React from "react";

export const IconsSocial = () => {
    return <div className="IconsSocial">
        <a href='https://www.linkedin.com/in/andriy-chemerynskiy-9a4430139/'
           className='IconsSocial__linkedin'
           target="_blank"
           rel="noopener noreferrer">
            <img alt='LinkedIn logo' src={'/media/linkedin-logo.svg'}/>
        </a>
        <a href='https://github.com/andrewchmr'
           className='IconsSocial__github'
           target="_blank"
           rel="noopener noreferrer">
            <img alt='Github logo' src={'/media/github-logo.svg'}/>
        </a>
        <a href='https://twitter.com/andrewchmr'
           target="_blank"
           rel="noopener noreferrer">
            <img alt='Twitter logo' src={'/media/twitter-logo.svg'}/>
        </a>
    </div>
};