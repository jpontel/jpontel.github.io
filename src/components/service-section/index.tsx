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
                className={`border-white flex p-12 w-full justify-between service-section ${borderTop ? 'border-t-4' : 'border-y-4'}`}
                onClick={() => window.open(link, '_blank')}
            >
                <div className={'font-bold text-white text-[50px] font-baijamjuree'}>
                    {text}
                </div>
                <div className={'items-center justify-center'}>
                    <img src={arrowIcon} alt={'Arrow'}/>
                </div>
            </button>
        </div>
    )
}