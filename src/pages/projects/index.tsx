import ProjectsBlock from "@/components/projects-block";
import weatherApp from '@/assets/weatherapp-mockup.png';
import aguadoce from '@/assets/aguadoce-png.png';
import picture from '@/assets/prisoner.png';
import './../home/style/style.css';
import {isMobile} from "@/util";
import './style/style.css';

export default function Projects() {
    const mobile = isMobile();

    return (
        <div className={'mb-32 xsm:px-[20px] md:p-32 pt-32 flex flex-col gap-20 md:px-[250px]'}>
            <div className={'text-white justify-start items-start flex flex-col'}>
                <div
                    className={'font-baijamjuree xsm:text-[30px] md:text-[50px] font-bold xsm:w-full md:w-[350px] mb-[35px]'}>
                    What I've been <span className={'styled-text'}>working on?</span>
                </div>
                <div className={'text-left xsm:text-[15px] leading-8 md:text-[18px] xsm:w-full md:w-2/3'}>
                    Over the years, I’ve worked on a variety of projects ranging from web and mobile development to
                    machine learning and data analysis. Each project presented unique challenges that pushed me to
                    explore new technologies and refine my skills! 😁
                </div>
            </div>
            {mobile ? (
                <div className={'flex flex-col w-full h-full gap-8'}>
                    <ProjectsBlock title={'Weather App'}
                                   description={'Mobile App created using Swift for weather prediction using AccuWeather API'}
                                   img={weatherApp}
                                   size={'small'} width={'w-full'}/>
                    <ProjectsBlock title={'Vegan Recipes'}
                                   description={'Mobile App created using Flutter to bring easily vegan recipes for users.'}
                                   img={picture}
                                   size={'small'} width={'w-full'}/>
                    <ProjectsBlock title={'E-Commerce Webstore'}
                                   description={'Clothing webstore made with React Typescript'} img={aguadoce}
                                   size={'large'} width={'w-full'}/>
                    <ProjectsBlock title={'Landing Page Design'} description={'Landing Page designed using Figma'}
                                   img={picture}
                                   size={'small'} width={'w-full'}/>
                    <ProjectsBlock title={'Chatbot'}
                                   description={'ChatBot developed using NLP algorithm and NLTK Tools'} img={picture}
                                   size={'small'} width={'w-full'}/>
                </div>
            ) : (
                <div className={'flex flex-col gap-6'}>
                    <div className={'flex gap-8'}>
                        <ProjectsBlock title={'Weather App'}
                                       description={'Mobile App created using Swift for weather prediction using AccuWeather API'}
                                       img={weatherApp}
                                       size={'small'} width={'w-full'}/>
                        <ProjectsBlock title={'Vegan Recipes'}
                                       description={'Mobile App created using Flutter to bring easily vegan recipes for users.'}
                                       img={picture}
                                       size={'small'} width={'w-full'}/>
                    </div>
                    <ProjectsBlock title={'E-Commerce Webstore'}
                                   description={'Clothing webstore made with React Typescript'} img={aguadoce}
                                   size={'large'} width={'w-full'}/>
                    <div className={'flex gap-8'}>
                        <ProjectsBlock title={'Landing Page Design'} description={'Landing Page designed using Figma'}
                                       img={picture}
                                       size={'small'} width={'w-full'}/>
                        <ProjectsBlock title={'Chatbot'}
                                       description={'ChatBot developed using NLP algorithm and NLTK Tools'}
                                       img={picture}
                                       size={'small'} width={'w-full'}/>
                    </div>
                </div>
            )}

        </div>
    )
}


