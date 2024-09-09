import '@/pages/projects/style/style.css';
import {Fragment} from "react";

interface ProjectsBlockProps {
    title: string;
    description: string;
    img: string;
    size: 'small' | 'large';
    width?: string;
}

export default function ProjectsBlock({title, description, img, size, width}: ProjectsBlockProps) {
    return (
        <Fragment>
            <div className={`${size === 'small' ? '' : ''} w-full rounded-[20px] bg-[#1C1C22] text-white border border-zinc-500`}>
                <img src={img} alt={'Screenshot'} className={`${width ? width : 'w-[400px]'} rounded-[40px]`}/>
                {/*<div className={'bg-[#1C1C22] p-6 rounded-b-[20px] items-start text-start'}>*/}
                {/*    <div className={'font-baijamjuree font-semibold text-[18px]'}>*/}
                {/*        {title}*/}
                {/*    </div>*/}
                {/*    <div className={'text-[13px]'}>*/}
                {/*        {description}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </Fragment>
    )
}