import React from "react";
import Link from 'next/link';
import { Layout } from "../components/Layout";

const Projects = () => {
  return (
    <Layout
      pageTitlePrefix={`Projects`}
      description={'Side projects that I sometimes work on when I am bored 💻'}>
      <div className="Projects">
        <div>
          <div className="Projects__paragraph">
            <h2>
              <a href="https://roastmywebsite.net/" target="_blank"
                rel="noopener noreferrer">Roast My Website</a>
            </h2>
            <div className="Projects__date">Feb 2021 – Present</div>
          </div>
          <div className="Projects__desc Projects__paragraph">Roast My Website is a platform where you can get feedback, receive critics and suggestions on your website. It will help you to improve it and get ideas!
          </div>
        </div>
        <div>
          <div className="Projects__paragraph">
            <h2><Link href="/"><a>Personal Portfolio</a></Link></h2>
            <div className="Projects__date">May 2020 – Present</div>
          </div>
          <div className="Projects__desc Projects__paragraph">An idea was to create an interactive, not boring website that can showcase my work and experience.
          </div>
          <div className="Projects__paragraph"><a href="https://github.com/andrewchmr/personal-portfolio" target="_blank"
            rel="noopener noreferrer">Source code</a></div>
        </div>
      </div>
    </Layout>
  )
};

export default Projects;