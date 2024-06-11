import './App.css'
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Services from "./pages/services";
import Projects from "./pages/projects";

function App() {
    return (
        <div className={'bg-[#161513]'}>
            <Navbar/>
            <Home/>
            <Services/>
            <Projects />
        </div>
    )
}

export default App
