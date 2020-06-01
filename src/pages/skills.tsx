import React from "react";
import {Layout} from "../components/Layout";

const Skills = () => {

    const stringToListElements = (s: string) => {
        return (
            <ul>{s.split('').map((char: string, index: number) =>
                <li key={`${char}-${index}`}>{char !== ' ' ? char : '\u00A0'}</li>)}
            </ul>
        )
    };

    return (
        <Layout
            pageTitlePrefix={'Skills & Experience'}
            description={'TypeScript/JavaScript enthusiast experienced with React and Angular. Open to new technologies and development opportunities.'}
            fullscreen>
            <div className={'Skills__text'}><p>TypeScript/JavaScript enthusiast experienced with React and Angular.
                Open to new technologies and development opportunities.</p>
                <p>Passionate about data visualisation and creating cool user interfaces.</p>

                <p>Visit my <a href='https://www.linkedin.com/in/andriy-chemerynskiy-9a4430139/'
                               target="_blank"
                               rel="noopener noreferrer">LinkedIn</a> profile for more information or just <a
                    href={'mailto:andrzej.chem@gmail.com'}>contact</a> me.</p></div>
            <div className="Skills__stripes-wrapper">
                <div className="Skills__stripe Skills__stripe--first">
                    {stringToListElements('React Angular Redux Node.js React Native Express Docker Git ')}
                </div>
                <div className="Skills__stripe Skills__stripe--second">
                    {stringToListElements('HTML CSS Less Sass D3 JavaScript TypeScript PHP Python Java ')}
                </div>
                <div className="Skills__stripe Skills__stripe--third">
                    {stringToListElements('Front-end Web Data Visualisation RWD Scrum Agile UX GA SPA  ')}
                </div>
            </div>
        </Layout>
    )
};

export default Skills;