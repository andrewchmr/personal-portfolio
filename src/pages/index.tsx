import React from "react";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Travel } from "../components/Travel";
// @ts-ignore
import ReactFullpage from "@fullpage/react-fullpage";
import { anchors } from "../utils/anchors";
import { SideMenu } from "../components/SideMenu";
import { About } from "../components/About";

function Index() {
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
            <Skills />
            <Projects />
            <Travel />
            <Contact />
          </ReactFullpage.Wrapper>)
        }
      />
    </>
  )
}

export default Index;
