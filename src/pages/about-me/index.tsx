import GetInTouchButton from "../../components/get-in-touch-button";
import AboutMeSection from "../../components/aboutme-section";

export default function AboutMe() {
    return (
        <div
            className={'bg-[#1C1C22] xsm:py-10 md:py-32 flex flex-col items-center justify-center xsm:px-[20px] md:px-[250px]'}>
            <div className={'w-full h-full flex flex-col xsm:gap-2 md:gap-8 justify-center items-center text-start'}>
                <div className={'flex flex-col w-full'}>
                    <div className={'font-baijamjuree font-bold xsm:text-[30px] md:text-[50px] w-full text-white'}>
                        José Rodrigo Pontel
                    </div>
                    <div
                        className={'text-left xsm:text-[15px] leading-8 md:text-[18px] xsm:w-full md:w-[80%] text-white'}>
                        I am looking to join a cross-functional team where I can leverage my skills in front-end and
                        back-end development, UI/UX design, and machine learning to create impactful and accessible
                        digital experiences.
                    </div>
                </div>
                <div className={'w-full justify-start items-start flex gap-12 mb-12'}>
                    <AboutMeSection number={'+15'} description={'Projects Done'}/>
                    <AboutMeSection number={'4'} description={'Years of Experience'}/>
                </div>
            </div>
            <div className={'flex flex-col w-full h-full items-center justify-center font-baijamjuree'}>
                {/*<Carousel/>*/}
                <div className={'w-full h-full flex items-center justify-center mt-12 font-baijamjuree'}>
                    <div
                        className={'w-full h-[400px] styled-background rounded-b-[50px] flex flex-col items-start font-baijamjuree font-bold text-center py-12'}>
                        <span
                            className={'w-full h-full xsm:p-2 md:p-0 flex flex-col items-center justify-center xsm:text-[45px] md:text-[60px] text-white'}>
                            Interested in working with me?
                        </span>
                        <span className={'w-full h-full flex items-center justify-center'}>
                            <div>
                                <GetInTouchButton variation={'primary'}/>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}