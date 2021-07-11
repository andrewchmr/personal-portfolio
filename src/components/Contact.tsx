import React from "react";
import { Layout } from "../components/Layout";
import { ScrollAnimation } from "./ScrollAnimation";

export const ContactComponent = () => {
  return (
    <Layout contentClassName="Contact">
      <div className="Contact__socials">
        <ul>
          <li><a href="https://github.com/andrewchmr" target="_blank"
            rel="noopener noreferrer">Github</a></li>
          <li><a href="https://www.linkedin.com/in/andriy-chemerynskiy" target="_blank"
            rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com/andrewchmr" target="_blank"
            rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
      <ScrollAnimation
        animateIn="animateStripfromLeft"
        className='paragraph'
      >Do you want to talk?
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animateStripfromRight"
        delay={600}
        className='paragraph'
      >Let's make something incredible together!
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animateStripfromLeft"
        delay={800}
        className='paragraph'
      >
        <a href='mailto:andrzej.chem@gmail.com'>andrzej.chem @gmail.com</a>
      </ScrollAnimation>
    </Layout>
  )
}