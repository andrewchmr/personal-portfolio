import React from "react";
import { Layout } from "../components/Layout";

function Contact() {
    return (
        <Layout
            pageTitlePrefix='Contact'
            description='Do you want to talk? Just drop me a line then, don’t be shy!'>
            <div className="Contact__socials">
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
            <div>Let's make something incredible together!</div>
            <p><a href='mailto:andrzej.chem@gmail.com'>andrzej.chem@gmail.com</a></p>
        </Layout>
    )
}

export default Contact;