import ViewAllWorksButton from "../../components/view-all-works-button";
import ServiceSection from "../../components/service-section";
import GetInTouchButton from "../../components/get-in-touch-button";
import './style/style.css';

export default function Services() {
    return (
        <div className={'w-full h-full bg-[#1C1C22] text-white xsm:pb-10 md:pb-32 pt-20 xsm:px-[30px] md:px-[250px]'}>
            <div className={'flex md:flex xsm:flex-col justify-between'}>
                <div className={'md:w-[630px] xsm:w-full font-bold xsm:text-[35px] md:text-[50px] font-baijamjuree pb-4'}>
                    Design that solves <span className="straight-line"/>problems, one <span
                    className={'styled-text font-baijamjuree'}>product</span><span className={'styled-text font-baijamjuree'}> at a time.</span>                </div>
                <div className={'gap-4 flex md:justify-end md:items-end xsm:justify-start xsm:items-start'}>
                    <GetInTouchButton variation={'secondary'}/>
                    <ViewAllWorksButton variation={'secondary'}/>
                </div>
            </div>
            <div className={'flex-col mt-12'}>
                <ServiceSection text={'UI/UX Development'} borderTop={true} link={'https://www.behance.net/joseropontel/'}/>
                <ServiceSection text={'Web Development'} borderTop={true} link={'https://github.com/stars/jpontel/lists/web-apps'}/>
                <ServiceSection text={'Mobile Development'} borderTop={true} link={'https://github.com/stars/jpontel/lists/mobile-apps'}/>
                <ServiceSection text={'Machine Learning'} borderTop={false} link={'https://github.com/stars/jpontel/lists/machine-learning'}/>
            </div>
        </div>
    )
}
