import React, {Fragment} from "react";
import Home from "../home";
import Services from "../services";
import Projects from "../projects";
import AboutMe from "../about-me";

interface MainPageProps {
    homeRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    aboutMeRef: React.RefObject<HTMLDivElement>;
}

export default function MainPage({homeRef, servicesRef, projectsRef, aboutMeRef}: MainPageProps) {
    return(
        <Fragment>
            <div ref={homeRef}>
                <Home/>
            </div>
            <div ref={servicesRef}>
                <Services/>
            </div>
            <div ref={projectsRef}>
                <Projects/>
            </div>
            <div ref={aboutMeRef}>
                <AboutMe/>
            </div>
        </Fragment>
    )
}