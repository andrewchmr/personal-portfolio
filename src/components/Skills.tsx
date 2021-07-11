import React, { useContext } from "react";
import { Layout } from "../components/Layout";
import { AppContext } from "../context/AppContext";
import { ScrollAnimation } from "./ScrollAnimation";


const SplitText = ({ text }: { text: string }) => {
  return (
    <ScrollAnimation className="Skills__circle-wrapper" animateIn="fadeIn">
      <span className="Skills__circle" aria-label={text} aria-level={1} role="heading">
        {text.split("").map((char, index) => {
          const style = { "--char-index": index } as React.CSSProperties;
          return (
            <span
              className="Skills__circle-char"
              aria-hidden="true"
              style={style}
              key={index}
            >
              {char !== ' ' ? char : '\u00A0'}
            </span>);
        })}
      </span>
    </ScrollAnimation>
  );
}

export const Skills = () => {
  const context = useContext(AppContext);

  return (
    <Layout contentClassName="Skills">
      <SplitText text="Front-end react typescript javascript node.js web " />
      <div className={'Skills__text'}>
        <ScrollAnimation
          delay={0}
          animateIn="animateStripfromLeft"
          className='paragraph'
        >TypeScript/JavaScript enthusiast
          experienced with React and Angular.
          Open to new technologies and development opportunities.</ScrollAnimation>
        <ScrollAnimation
          animateIn="animateStripfromRight"
          delay={600}
          className='paragraph'
        >Visit my <a
          href='https://www.linkedin.com/in/andriy-chemerynskiy/'
          target="_blank"
          rel="noopener noreferrer">LinkedIn</a> profile for more information or just {' '}
          <a href="#contact" onClick={() => context?.setLinkHovered?.(false)}>contact</a> me.</ScrollAnimation>
      </div>
    </Layout>
  )
};
