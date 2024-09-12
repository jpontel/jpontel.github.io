import linkedinIcon from "../../assets/linkedin-svgrepo-com.svg";
import {ButtonProps} from "@/components/get-in-touch-button";
import {Fragment, useEffect, useRef, useState} from "react";
import whatsappIcon from "../../assets/whatsapp-icon.svg";
import './style/style.css';

const style = {
    'primary':'w-[120px] bg-white rounded-full text-black font-semibold p-2 font-baijamjuree',
    'secondary':'w-full bg-black rounded-lg text-[10px] text-white font-semibold p-1 font-baijamjuree',
};

export default function LetsTalkButton({variation}:ButtonProps) {
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (buttonRef.current && variation === 'primary') {
            const rect = buttonRef.current.getBoundingClientRect();
            setModalPosition({
                top: rect.top + window.scrollY +60,
                left: rect.left + window.scrollX -70
            });
        } else if (buttonRef.current && variation === 'secondary') {
            const rect = buttonRef.current.getBoundingClientRect();
            setModalPosition({
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX - 300
            });
        }
        setIsOpen(true);
    };

    const redirectLink = (link: string) => {
        window.open(link, '_blank');
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleScroll = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('scroll', handleScroll);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return(
        <Fragment>
            <button
                className={variation === 'primary' ? style.primary : style.secondary}
                onClick={handleClick}
                ref={buttonRef}
            >
                Let's Talk
            </button>
            {isOpen && (
                <div
                    ref={modalRef}
                    style={{ position: 'absolute', top: modalPosition.top, left: modalPosition.left }}
                    className={'modal animation-grow flex-col'}
                >
                    <p className={'text-black xsm:text-[15px] md:text-[20px] font-bold text-center'}>Contact me</p>
                    <p className={'text-black xsm:text-[10px] md:text-[14px]'}><span className={'font-bold'}>Email:</span> jpontel2002@gmail.com</p>
                    <p className={'text-black xsm:text-[10px] md:text-[14px]'}><span className={'font-bold'}>Phone Number:</span> (41)98497-4864</p>
                    <div className={'inline-flex w-full gap-3'}>
                        <button
                            className={'w-[25px] h-[25px] border border-black rounded-full items-center justify-center flex'}
                            onClick={() => redirectLink('https://wa.me/554184974864')}
                        >
                            <img src={whatsappIcon} alt={'WhatsApp'} className={'w-[13px] h-[13px] m-auto'} />
                        </button>
                        <button
                            className={'w-[25px] h-[25px] border border-black rounded-full items-center justify-center flex'}
                            onClick={() => redirectLink('https://www.linkedin.com/in/josé-rodrigo-pontel-292b93161')}
                        >
                            <img src={linkedinIcon} alt={'LinkedIn'} className={'w-[13px] h-[13px] m-auto'} />
                        </button>
                    </div>
                </div>
            )}
        </Fragment>
    )
}