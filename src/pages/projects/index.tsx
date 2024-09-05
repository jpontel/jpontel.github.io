import ProjectsBlock from "../../components/projects-block";
import picture from './../../assets/prisoner.png';
import './../home/style/style.css';

export default function Projects() {
    return (
        <div className={'mb-32 p-32 pt-32 flex flex-col gap-20 lg:px-[250px]'}>
            <div className={'text-white justify-start items-start flex flex-col'}>
                <div className={'font-baijamjuree text-[50px] font-bold w-[350px] mb-[35px]'}>
                    What I've been <span className={'styled-text'}>working on?</span>
                </div>
                <div className={'text-left text-[18px] w-2/3'}>
                    Over the years, I’ve worked on a variety of projects ranging from web and mobile development to
                    machine learning and data analysis. Each project presented unique challenges that pushed me to
                    explore new technologies and refine my skills! 😁
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
