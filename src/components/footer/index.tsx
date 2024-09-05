
export default function Footer() {
    return (
        <div className={'w-full h-full py-28 flex text-white lg:px-[250px]'}>
            <div className={'w-full h-full flex flex-col gap-6'}>
                <div className={'font-baijamjuree font-bold text-4xl'}>
                    GUIGO
                </div>
                <div className={'w-full h-full text-[13px] text-zinc-400'}>
                    © Made with ❤️‍🔥 by José Rodrigo Pontel
                </div>
            </div>
            <div className={'w-full h-full items-end gap-6 justify-end text-end flex flex-col'}>
                <div className={'w-full h-full flex gap-4 items-end justify-end'}>
                    <div>Home</div>
                    <div>About Me</div>
                    <div>Contact</div>
                </div>
                <div className={'w-full h-full flex gap-4 items-end justify-end'}>
                    <div className={'w-[40px] h-[40px] rounded-full border border-[#FF8A56]'}></div>
                    <div className={'w-[40px] h-[40px] rounded-full border border-[#FF8A56]'}></div>
                    <div className={'w-[40px] h-[40px] rounded-full border border-[#FF8A56]'}></div>
                </div>
            </div>
        </div>
    )
}