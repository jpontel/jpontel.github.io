import Navbar from "./components/navbar";
import Services from "./pages/services";
import Projects from "./pages/projects";
import AboutMe from "./pages/about-me";
import Home from "./pages/home";
import './App.css'

function App() {
    return (
        <div className={'bg-[#161513]'}>
            <Navbar/>
            <Home/>
            <Services/>
            <Projects />
            <AboutMe />
        </div>
    )
}

export default App
