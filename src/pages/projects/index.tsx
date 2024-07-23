import ProjectsBlock from "../../components/projects-component";
import picture from './../../assets/prisoner.png';
import './../home/style/style.css';

export default function Projects() {
    return (
        <div className={'mb-32 p-32 pt-32'}>
            <div className={'text-white justify-between items-center flex'}>
                <div className={'font-baijamjuree text-[50px] font-bold w-[300px] mb-[50px]'}>
                    Look at my <span className={'styled-text'}>projects</span>
                </div>
                <div className={'text-center'}>
                    Here, I listed some of my personal projects I've worked on.
                </div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-52'}>
                <ProjectsBlock title={'Finance Landing Page'} description={'Landing Page UI Kit'} img={picture}/>
                <ProjectsBlock title={'Interior Design Website'} description={'Dribbble Shot'} img={picture}/>
                <ProjectsBlock title={'Russell Morgan Portfolio'} description={'Dribbble Shot'} img={picture}/>
                <ProjectsBlock title={'Sonali Landing Page'} description={'Landing Page UI Kit'} img={picture}/>
            </div>
        </div>
    )
}
