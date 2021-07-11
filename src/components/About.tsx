import React from "react";
import ReactTooltip from "react-tooltip";
import { isMobile } from "../utils/isMobile";
import { Layout } from "./Layout";
import { ScrollAnimation } from "./ScrollAnimation";
import Image from 'next/image';

const Tooltips = () => {
  if (typeof navigator !== 'undefined' && isMobile()) return null;

  return (<>
    <ReactTooltip className={'Index__tooltip'} arrowColor={'#121212'}
      uuid="my-photo" place="left" id='my-photo'>
      <Image priority width={400} height={500} className={'Index__photo Index__photo--vertical'}
        alt={'Andriy Chemerynskiy Photo'}
        src={'/static/personal-photo.jpg'} />
    </ReactTooltip>
    <ReactTooltip className={'Index__tooltip'} arrowColor={'#121212'}
      uuid="wroclaw-photo" place="right" id={'wroclaw-photo'}>
      <Image priority width={500} height={352} className={'Index__photo Index__photo--horizontal'}
        alt={'Wroclaw, Poland Photo'}
        src={'/static/wroclaw.jpg'} />
    </ReactTooltip>
  </>)
};

export const About = () => {
  return (
    <Layout>
      <section className={'Index'}>
        <ScrollAnimation className='paragraph' animateIn="animateStripfromLeft">
          Hey, I’m{' '}
          <a data-tip={true} data-for="my-photo">Andriy Chemerynskiy</a>
          , a Software Engineer
        </ScrollAnimation>
        <ScrollAnimation delay={600} className='paragraph' animateIn="animateStripfromRight"> currently based in {' '}
          <a data-tip={true} data-for="wroclaw-photo">Wroclaw, Poland</a>.
        </ScrollAnimation>
        <Tooltips />
      </section>
    </Layout>);
};
