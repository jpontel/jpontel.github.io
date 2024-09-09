import linkedinIcon from '@/assets/linkedin-svgrepo-com.svg';
import whatsappIcon from '@/assets/whatsapp-icon.svg';

export default function Footer() {
    const redirectLink = (link: string) => {
        window.open(link, '_blank');
    };
    return (
        <div className={'w-full h-full py-28 flex flex-col text-white lg:px-[250px] font-baijamjuree'}>
            <div className={'w-full bg-zinc-500 h-[1px] mb-12'}/>
            <div className={'flex'}>
                <div className={'w-full h-full flex flex-col gap-6'}>
                    <div className={'font-baijamjuree font-bold text-4xl'}>
                        GUIGO
                    </div>
                    <div className={'w-full h-full text-[13px] text-zinc-400'}>
                        © Made with ❤️‍🔥 by José Rodrigo Pontel
                    </div>
                </div>
                <div className={'w-full h-full items-end gap-3 justify-end text-end flex flex-col'}>
                    <p className={'text-[18px] font-semibold'}>Find me on Social media</p>
                    <div className={'w-full h-full flex gap-4 items-end justify-end'}>
                        <button
                            className={'w-[30px] h-[30px] rounded-full border border-white flex items-center justify-center'}
                            onClick={() => redirectLink('https://wa.me/554184974864')}
                        >
                            <img src={whatsappIcon} className={'svg-white w-[15px]'} alt={'WhatsApp'}/>
                        </button>
                        <button
                            className={'w-[30px] h-[30px] rounded-full border border-white flex items-center justify-center'}
                            onClick={() => redirectLink('https://www.linkedin.com/in/josé-rodrigo-pontel-292b93161')}
                        >
                            <img src={linkedinIcon} className={'svg-white w-[15px]'} alt={'LinkedIn'}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}