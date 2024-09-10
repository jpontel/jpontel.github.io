import linkedinIcon from '@/assets/linkedin-svgrepo-com.svg';
import whatsappIcon from '@/assets/whatsapp-icon.svg';
import {isMobile} from "@/util";

export default function Footer() {
    const mobile = isMobile();

    const redirectLink = (link: string) => {
        window.open(link, '_blank');
    };

    const styles = {
        'mobile':'flex flex-col gap-4',
        'desktop':'flex'
    }

    return (
        <div className={'w-full h-full xsm:py-8 md:py-28 flex flex-col text-white md:px-[250px] xsm:px-[20px] font-baijamjuree'}>
            <div className={'w-full bg-zinc-500 h-[1px] xsm:mb-0 md:mb-12'}/>
            <div className={mobile ? styles.mobile : styles.desktop}>
                <div className={'w-full h-full flex flex-col xsm:gap-2 md:gap-6'}>
                    <div className={'font-baijamjuree font-bold text-4xl'}>
                        JPONTEL
                    </div>
                    <div className={'w-full h-full text-[13px] text-zinc-400'}>
                        © Made with ❤️‍🔥 by José Rodrigo Pontel
                    </div>
                </div>
                <div className={'w-full h-full xsm:items-start md:items-end gap-3 flex flex-col'}>
                    <p className={'text-[18px] font-semibold'}>Find me on Social media</p>
                    <div className={'w-full h-full flex gap-4 xsm:justify-start md:justify-end'}>
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