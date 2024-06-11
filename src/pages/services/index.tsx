import ServiceSection from "../../components/service-section";

export default function Services() {
    return (
        <div className={'w-full h-full bg-[#1C1C22] text-white'}>
            <div>
                <div className={'font-bold text-[50px] font-baijamjuree'}>
                    Design that solves problems bla bla lorem ipsum
                </div>
                <div>
                    <button className={'rounded-full bg-purple-300 p-3'}>
                        Get in Touch
                    </button>
                    <button className={'rounded-full bg-purple-400 p-3'}>
                        View All Works
                    </button>
                </div>
            </div>
            <div className={'flex-col mt-12'}>
                <ServiceSection text={'UI/UX Designer'}/>
                <ServiceSection text={'Web Development'}/>
                <ServiceSection text={'Mobile Development'}/>
                <ServiceSection text={'Game Development'}/>
            </div>
        </div>
    )
}
