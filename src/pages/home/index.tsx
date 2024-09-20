import GetInTouchButton from "../../components/get-in-touch-button";
import ViewAllWorksButton from "../../components/view-all-works-button";
import profile from './../../assets/img.png';
import './style/style.css';

export default function Home() {
    return (
        <div className={'w-full flex justify-center items-center flex-col md:mt-28 xsm:mt-10'}>
            <div>
                <img className={'bg-white rounded-full w-[200px] mb-8 border-white border-4'} src={profile} alt={'Me'}/>
            </div>
            <div className={'text-white font-baijamjuree font-bold md:text-[55px] xsm:text-[35px] xsm:w-full xsm:px-6 md:w-[60%] text-center'}>
                <span className={'styled-text'}> Hello! I'm José</span>, creative software developer based in Brazil.
            </div>
            <p className={'text-white lg:text-[18px] xsm:text-[15px] xsm:w-full xsm:px-[25px] md:w-[50%] text-center leading-[35px] mt-6'}>
                A Software Developer with a passion for creating and developing software that can help people in their
                daily lives. Responsive Design, Web and Mobile development
            </p>
            <div className="w-full flex flex-col items-center gap-8 justify-center xsm:px-[15%] mt-8 pb-10 md:flex-row md:pb-28">
                <GetInTouchButton variation={'primary'}/>
                <ViewAllWorksButton variation={'primary'}/>
            </div>
            <div className={'w-full h-[60px] styled-background'}/>
        </div>
    )
}