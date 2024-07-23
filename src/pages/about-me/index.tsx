import AboutMeSection from "../../components/aboutme-section";

export default function AboutMe() {
    return (
        <div className={'bg-[#1C1C22] pt-32'}>
            <div className={'flex flex-col px-36'}>
                <div className={'inline-flex items-center justify-center'}>
                    <div className={'font-baijamjuree font-bold text-[50px] w-[400px] text-white'}>
                        José Rodrigo Pontel
                    </div>
                    <div className={'text-white text-[18px]'}>
                        Minha trajerória é marcada por bla bla e eu fiz bla bla amo programar e tals bla bla comida
                        cozinhar bla bla
                    </div>
                </div>
                <div className={'w-full justify-end items-end flex gap-12'}>
                    <AboutMeSection number={15} description={'Projects Done'}/>
                    <AboutMeSection number={20} description={'Years of Experience'}/>
                    <AboutMeSection number={20} description={'Years of Experience'}/>
                    <AboutMeSection number={20} description={'Years of Experience'}/>
                </div>
            </div>
        </div>
    )
}