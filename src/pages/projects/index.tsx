import picture from './../../assets/prisoner.png';
import ProjectsBlock from "../../components/projects-component";

export default function Projects() {
    return (
        <div className={'mb-32 p-32'}>
            <div className={'text-white inline-flex'}>
                <div className={'font-baijamjuree text-[50px] font-bold'}>
                    Some Projects
                </div>
                <div className={'text-center justify-center'}>
                    Here, i listed some of my personal projects i've worked on.
                </div>
            </div>
            <div>
                <ProjectsBlock title={'My project of the projects'} description={'Description of the Project'} img={picture}/>
            </div>
        </div>
    )
}