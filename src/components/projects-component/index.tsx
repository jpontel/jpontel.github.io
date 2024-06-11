interface ProjectsBlockProps {
    title: string;
    description: string;
    img: string;
}

export default function ProjectsBlock({title, description, img}: ProjectsBlockProps) {
    return(
        <div className={'w-[500px] h-[550px] rounded-[20px] bg-[#1C1C22] text-white'}>
            <div>
                <img src={img} alt={'Screenshot'} className={'rounded-t-[20px]'}/>
            </div>
            <div className={'bg-[#1C1C22] p-6 rounded-b-[20px]'}>
                <div className={'font-baijamjuree font-bold text-[18px]'}>
                    {title}
                </div>
                <div className={'text-[13px]'}>
                    {description}
                </div>
            </div>
        </div>
    )
}