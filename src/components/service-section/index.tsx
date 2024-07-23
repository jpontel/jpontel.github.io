import arrowIcon from  './../../assets/arrow.svg';
import './style/style.css';

interface ServiceSectionProps {
    text: string;
    borderTop: boolean;
}

export default function ServiceSection({text, borderTop}: ServiceSectionProps) {
    return (
        <div className={'px-36'}>
            <div className={`border-white flex p-12 w-full justify-between service-section ${borderTop ? 'border-t-4' : 'border-y-4'}`}>
                <div className={'font-bold text-white text-[50px] font-baijamjuree'}>
                    {text}
                </div>
                <div className={'items-center justify-center'}>
                    <img src={arrowIcon} alt={'Arrow'}/>
                </div>
            </div>
        </div>
    )
}