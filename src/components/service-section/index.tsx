import arrowIcon from  './../../assets/arrow.svg';

interface ServiceSectionProps {
    text: string;
}

export default function ServiceSection({text}: ServiceSectionProps) {
    return (
        <div className={'px-36'}>
            <div className={'border-y-4 border-white flex p-12 w-full justify-between'}>
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