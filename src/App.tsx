import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Services from "./pages/services";
import Projects from "./pages/projects";
import AboutMe from "./pages/about-me";
import React, { useRef } from 'react';
import Home from "./pages/home";
import './App.css';

function App() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const aboutMeRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={'bg-[#161513]'}>
            <Navbar
                scrollToSection={scrollToSection}
                homeRef={homeRef}
                servicesRef={servicesRef}
                projectsRef={projectsRef}
                aboutMeRef={aboutMeRef}
            />
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={servicesRef}>
                <Services />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div ref={aboutMeRef}>
                <AboutMe />
            </div>
            <Footer />
        </div>
    );
}

export default App;

