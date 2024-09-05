import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import React, {useRef} from 'react';
import MainPage from "./pages/main";
import ErrorPage from "./pages/404";
import './App.css';

function App() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const aboutMeRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <Router>
            <div className={'bg-[#161513]'}>
                <Navbar
                    scrollToSection={scrollToSection}
                    homeRef={homeRef}
                    servicesRef={servicesRef}
                    projectsRef={projectsRef}
                    aboutMeRef={aboutMeRef}
                />
                <Routes>
                    <Route path={'/'} element={<MainPage homeRef={homeRef} servicesRef={servicesRef} projectsRef={projectsRef} aboutMeRef={aboutMeRef}/>}/>
                    <Route path={"*"} element={<ErrorPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

