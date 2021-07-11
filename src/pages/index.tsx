import React from "react";
import ReactTooltip from "react-tooltip";
import { Layout } from "../components/Layout";
import { isMobile } from "../utils/isMobile";
import Image from 'next/image';
import { ProjectsComponent } from "../components/Projects";
import { SkillsComponent } from "../components/Skills";
import { ContactComponent } from "../components/Contact";
import { Travel } from "../components/Travel";
// @ts-ignore
import ReactFullpage from "@fullpage/react-fullpage";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { anchors } from "../utils/anchors";
import { GetStaticProps } from "next";
import { TravelLocation } from "../types";
import { SideMenu } from "../components/SideMenu";

interface Props {
  location: TravelLocation;
}

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

function Index({ location }: Props) {
  return (
    <>
      <SideMenu />
      <ReactFullpage
        anchors={anchors}
        menu='#sideMenu'
        scrollingSpeed={1000}
        licenseKey='FB7A698F-5FAA4A1E-87B53A37-B36648F0'
        render={() =>
        (
          <ReactFullpage.Wrapper>
            <div>
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
              </Layout>
              <SkillsComponent />
              <ProjectsComponent />
              <Travel location={location} />
              <ContactComponent />
            </div>
          </ReactFullpage.Wrapper>)
        }
      />
    </>
  )
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://nomadlist.com/@andrewchmr.json');
    const { location } = await response.json();

    return {
      props: {
        location
      },
      revalidate: 60
    }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}