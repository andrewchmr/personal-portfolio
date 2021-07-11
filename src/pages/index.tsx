import React from "react";
import { ProjectsComponent } from "../components/Projects";
import { SkillsComponent } from "../components/Skills";
import { ContactComponent } from "../components/Contact";
import { Travel } from "../components/Travel";
// @ts-ignore
import ReactFullpage from "@fullpage/react-fullpage";
import { anchors } from "../utils/anchors";
import { GetStaticProps } from "next";
import { TravelLocation } from "../types";
import { SideMenu } from "../components/SideMenu";
import { About } from "../components/About";

interface Props {
  location: TravelLocation;
}

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
            <About />
            <SkillsComponent />
            <ProjectsComponent />
            <Travel location={location} />
            <ContactComponent />
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