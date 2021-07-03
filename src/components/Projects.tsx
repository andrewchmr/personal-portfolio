import React from "react";
import { Layout } from "../components/Layout";
import { AppContext } from "../context/AppContext";
import { ScrollAnimation } from "./ScrollAnimation";

export const ProjectsComponent = () => {
  const context = React.useContext(AppContext);

  return (
    <Layout contentClassName="Projects">
      <div>
        <ScrollAnimation animateIn="animateStripfromLeft" className="paragraph">
          <h2>
            <a href="https://roastmywebsite.net/" target="_blank"
              rel="noopener noreferrer">Roast My Website</a>
          </h2>
          <div className="Projects__date">Feb 2021 – Present</div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animateStripfromRight"
          delay={600}
          className="Projects__desc paragraph"
        >Roast My Website is a platform where you can get feedback, receive critics and suggestions on your website. It will help you to improve it and get ideas!
        </ScrollAnimation>
      </div>
      <div>
        <ScrollAnimation animateIn="animateStripfromLeft" delay={600} className="paragraph">
          <h2><a href="#about" onClick={() => context?.setLinkHovered?.(false)}>Personal Portfolio</a></h2>
          <div className="Projects__date">May 2020 – Present</div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animateStripfromRight"
          delay={600}
          className="Projects__desc paragraph"
        >An idea was to create an interactive, not boring website that can showcase my work and experience.
        </ScrollAnimation>
        <ScrollAnimation animateIn="animateStripfromLeft" delay={800} className="paragraph"><a href="https://github.com/andrewchmr/personal-portfolio" target="_blank"
          rel="noopener noreferrer">Source code</a></ScrollAnimation>
      </div>
    </Layout >
  )
};