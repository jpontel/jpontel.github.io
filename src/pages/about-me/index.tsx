import AboutMeSection from "../../components/aboutme-section";
import GetInTouchButton from "../../components/get-in-touch-button";

export default function AboutMe() {
    return (
        <div className={'bg-[#1C1C22] py-32 flex flex-col items-center justify-center lg:px-[250px]'}>
            <div className={'w-full h-full flex flex-col gap-8 justify-center items-center text-start '}>
                <div className={'flex flex-col w-full '}>
                    <div className={'font-baijamjuree font-bold text-[50px] w-full text-white'}>
                        José Rodrigo Pontel
                    </div>
                    <div className={'w-[800px] text-white text-[18px]'}>
                        Minha trajerória é marcada por bla bla e eu fiz bla bla amo programar e tals bla bla comida
                        cozinhar bla bla
                    </div>
                </div>
                <div className={'w-full justify-start items-start flex gap-12 mb-12'}>
                    <AboutMeSection number={'+15'} description={'Projects Done'}/>
                    <AboutMeSection number={'4'} description={'Years of Experience'}/>
                    <AboutMeSection number={'100%'} description={'Client Sattisfaction'}/>
                </div>
            </div>
            <div className={'flex flex-col w-full h-full items-center justify-center font-baijamjuree'}>
                <div className={'flex gap-4 w-full items-center justify-center'}>
                    <div className={'w-[474px] h-[306px] bg-white rounded-[20px] '}/>
                    <div className={'w-[474px] h-[306px] bg-white rounded-[20px] '}/>
                    <div className={'w-[474px] h-[306px] bg-white rounded-[20px] '}/>
                </div>
                <div className={'w-full h-full flex items-center justify-center mt-12 font-baijamjuree'}>
                    <div
                        className={'w-[865px] h-[400px] styled-background rounded-b-[50px] flex flex-col items-start font-baijamjuree font-bold text-center py-12'}>
                        <span className={'w-full h-full flex flex-col items-center justify-center text-[60px] text-white'}>Interested in working with me?</span>
                        <span className={'w-full h-full flex items-center justify-center'}>
                        <GetInTouchButton variation={'primary'}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}