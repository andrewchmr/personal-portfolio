import React from "react";

function Contact() {
    return (<>
            <div className="contacts-content__socials">
                <ul>
                    <li><a href="https://github.com/andrewchmr" target="_blank"
                           rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/andriy-chemerynskiy-9a4430139/" target="_blank"
                           rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com/andrewchmr" target="_blank"
                           rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
            <div>Do you want to talk?</div>
            <div>Just drop me a line then, don’t be shy!</div>
            <p><a style={{textDecoration: 'underline'}}
                  href={'mailto:andrzej.chem@gmail.com'}>andrzej.chem@gmail.com</a></p>
        </>
    )
}

export default Contact;