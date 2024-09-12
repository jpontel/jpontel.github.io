import ProjectsBlock from "@/components/projects-block";
import picture from '@/assets/prisoner.png';
import rectangle from  '@/assets/Rectangle 11.png';
import './../home/style/style.css';
import './style/style.css';
import {isMobile} from "@/util";

export default function Projects() {
    const mobile = isMobile();

    return (
        <div className={'mb-32 xsm:px-[20px] md:p-32 pt-32 flex flex-col gap-20 md:px-[250px]'}>
            <div className={'text-white justify-start items-start flex flex-col'}>
                <div className={'font-baijamjuree xsm:text-[30px] md:text-[50px] font-bold xsm:w-full md:w-[350px] mb-[35px]'}>
                    What I've been <span className={'styled-text'}>working on?</span>
                </div>
                <div className={'text-left xsm:text-[15px] leading-8 md:text-[18px] xsm:w-full md:w-2/3'}>
                    Over the years, I’ve worked on a variety of projects ranging from web and mobile development to
                    machine learning and data analysis. Each project presented unique challenges that pushed me to
                    explore new technologies and refine my skills! 😁
                </div>
            </div>
            {mobile ? (
                <div></div>
            ) : (
                <div className={'flex flex-col gap-6'}>
                    <div className={'flex gap-8'}>
                        <ProjectsBlock title={'Finance Landing Page'} description={'Landing Page UI Kit'} img={picture}
                                       size={'small'}/>
                        <ProjectsBlock title={'Russell Morgan Portfolio'} description={'Dribbble Shot'} img={picture}
                                       size={'small'}/>
                    </div>
                    <ProjectsBlock title={'Interiwor Design Website'} description={'Dribbble Shot'} img={rectangle}
                                   size={'large'} width={'w-full'}/>
                    <div className={'flex gap-8'}>
                        <ProjectsBlock title={'Sonali Landing Page'} description={'Landing Page UI Kit'} img={picture}
                                       size={'small'}/>
                        <ProjectsBlock title={'Sonali Landing Page'} description={'Landing Page UI Kit'} img={picture}
                                       size={'small'}/>
                    </div>
                </div>
            )}

        </div>
    )
}


