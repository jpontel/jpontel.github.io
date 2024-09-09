import arrowIcon from './../../assets/arrow.svg';
import './style/style.css';

interface ServiceSectionProps {
    text: string;
    borderTop: boolean;
    link: string;
}

export default function ServiceSection({text, borderTop, link}: ServiceSectionProps) {
    return (
        <div>
            <button
                className={`border-white flex xsm:p-8 md:p-12 w-full justify-between service-section ${borderTop ? 'border-t-4' : 'border-y-4'}`}
                onClick={() => window.open(link, '_blank')}
            >
                <div className={'font-bold text-white xsm:text-[25px] md:text-[50px] font-baijamjuree'}>
                    {text}
                </div>
                <div className={'items-center justify-center'}>
                    <img src={arrowIcon} alt={'Arrow'} className={'md:w-full xsm:w-[30px]'}/>
                </div>
            </button>
        </div>
    )
}