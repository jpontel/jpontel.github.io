import profile from './../../assets/img.png';
import './style/style.css';

export default function Home() {
    return (
        <div className={'w-full flex justify-center items-center flex-col mt-28'}>
            <div>
                <img className={'bg-white rounded-full w-[200px] mb-8 border-white border-4'} src={profile} alt={'Me'}/>
            </div>
            <div className={'text-white font-baijamjuree font-bold text-[55px] w-[60%] text-center'}>
                <span className={'styled-text'}>Hello, I'm José,</span> creative software developer based in Brazil.
            </div>
            <p className={'text-white text-[18px] w-[50%] text-center leading-[35px] mt-6'}>
                A Software Developer with a passion for creating and developing software that can help people in their
                daily lives. Responsive Design, Web and Mobile development
            </p>
            <div className={'inline-flex gap-8 justify-center mt-8 pb-28'}>
                <button className={'w-[180px] bg-white rounded-full p-4'}>
                    GET IN TOUCH
                </button>
                <button className={'w-[180px] text-white p-4 rounded-full border-white border-4'}>
                    VIEW ALL WORKS
                </button>
            </div>
            <div className={'w-full h-[60px] styled-background'} />
        </div>
    )
}