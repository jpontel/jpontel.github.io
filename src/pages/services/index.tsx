import ServiceSection from "../../components/service-section";
import './style/style.css';

export default function Services() {
    return (
        <div className={'w-full h-full bg-[#1C1C22] text-white pb-32 pt-20'}>
            <div className={'flex px-36 justify-between'}>
                <div className={'w-[630px] font-bold text-[50px] font-baijamjuree pb-4'}>
                    Design that solves <span className="straight-line"/>problems, one <span
                    className={'styled-text font-baijamjuree'}>product</span><span className={'styled-text font-baijamjuree'}> at a time.</span>                </div>
                <div className={'gap-4 flex justify-end items-end'}>
                    <button className={'w-[200px] h-[60px] rounded-full border-white border-4 p-3'}>
                        GET IN TOUCH
                    </button>
                    <button className={'w-[200px] h-[60px] rounded-full border-white border-4 p-3'}>
                        VIEW ALL WORKS
                    </button>
                </div>
            </div>
            <div className={'flex-col mt-12'}>
                <ServiceSection text={'UI/UX Designer'} borderTop={true}/>
                <ServiceSection text={'Web Development'} borderTop={true}/>
                <ServiceSection text={'Mobile Development'} borderTop={true}/>
                <ServiceSection text={'Game Development'} borderTop={false}/>
            </div>
        </div>
    )
}
