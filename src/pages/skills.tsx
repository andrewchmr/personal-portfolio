import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { AppContext } from "../context/AppContext";

const Skills = () => {
    const context = useContext(AppContext);

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
            imageUrl={'https://andrewchmr.com/static/skills.png'}
            fullscreen>
            <div className={'Skills__text'}><p className={'Skills__paragraph'}>TypeScript/JavaScript enthusiast
                experienced with React and Angular.
                Open to new technologies and development opportunities.</p>
                <p className={'Skills__paragraph'}>Passionate about data visualization and creating cool user
                    interfaces.</p>
                <p className={'Skills__paragraph'}>Visit my <a
                    href='https://www.linkedin.com/in/andriy-chemerynskiy-9a4430139/'
                    target="_blank"
                    rel="noopener noreferrer">LinkedIn</a> profile for more information or just <Link
                    href={'/contact'}>
                    <a onClick={() => context?.setLinkHovered?.(false)}>contact</a></Link> me.</p></div>
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