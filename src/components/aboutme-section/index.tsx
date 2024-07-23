import './../../pages/home/style/style.css';

interface AboutMeSectionProps {
    number: number;
    description: string;
}

export default function AboutMeSection({number, description}: AboutMeSectionProps) {
    return (
        <div className={'text-white'}>
            <div className={'font-baijamjuree font-bold text-[40px] styled-text'}>
                {number}
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}