import ViewAllWorksButton from "../../components/view-all-works-button";
import ServiceSection from "../../components/service-section";
import GetInTouchButton from "../../components/get-in-touch-button";
import './style/style.css';

export default function Services() {
    return (
        <div className={'w-full h-full bg-[#1C1C22] text-white pb-32 pt-20 lg:px-[250px]'}>
            <div className={'flex  justify-between'}>
                <div className={'w-[630px] font-bold text-[50px] font-baijamjuree pb-4'}>
                    Design that solves <span className="straight-line"/>problems, one <span
                    className={'styled-text font-baijamjuree'}>product</span><span className={'styled-text font-baijamjuree'}> at a time.</span>                </div>
                <div className={'gap-4 flex justify-end items-end'}>
                    <GetInTouchButton variation={'secondary'}/>
                    <ViewAllWorksButton variation={'secondary'}/>
                </div>
            </div>
            <div className={'flex-col mt-12'}>
                <ServiceSection text={'UI/UX Development'} borderTop={true} link={'https://www.behance.net/joseropontel/'}/>
                <ServiceSection text={'Web Development'} borderTop={true} link={'https://github.com/jpontel'}/>
                <ServiceSection text={'Mobile Development'} borderTop={true} link={'https://github.com/jpontel'}/>
                <ServiceSection text={'Machine Learning'} borderTop={false} link={'https://github.com/jpontel'}/>
            </div>
        </div>
    )
}
