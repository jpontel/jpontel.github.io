import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LetsTalkButton from "../lets-talk-button";
import React, {Fragment, useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {isMobile} from "@/util";

type NavbarProps = {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    servicesRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    aboutMeRef: React.RefObject<HTMLDivElement>;
    homeRef: React.RefObject<HTMLDivElement>;
};

const Navbar: React.FC<NavbarProps> = ({scrollToSection, homeRef, servicesRef, projectsRef, aboutMeRef}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const mobile = isMobile();

    const handleReturnMainPage = () => {
        navigate('/');
    };

    const handleOpenMenu = () => {
        setIsOpen(true);
    };

    const handleCloseMenu = (e: MouseEvent | TouchEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleCloseMenu);
            document.addEventListener('touchstart', handleCloseMenu);
        } else {
            document.removeEventListener('mousedown', handleCloseMenu);
            document.removeEventListener('touchstart', handleCloseMenu);
        }

        return () => {
            document.removeEventListener('mousedown', handleCloseMenu);
            document.removeEventListener('touchstart', handleCloseMenu);
        };
    }, [isOpen]);

    return (
        <Fragment>
            <div
                className={'w-full inline-flex p-4 text-white justify-between md:px-[250px] xsm:px-[30px] mt-2 font-baijamjuree '}>
                <div className={'inline-flex justify-center text-center items-center gap-6 '}>
                    <button
                        className={'font-bold text-xl mr-12'}
                        onClick={handleReturnMainPage}
                    >
                        JPONTEL
                    </button>
                </div>
                {mobile ? (
                    <div>
                        <button
                            className={'w-8 h-8 p-4 rounded-full bg-white border border-zinc-500 flex items-center justify-center'}
                            onClick={isOpen ? undefined : handleOpenMenu}
                        >
                            <MenuRoundedIcon style={{color: "#000"}}/>
                        </button>
                    </div>
                ) : (
                    <div className={'justify-center inline-flex items-center'}>
                        <div className={'inline-flex justify-end text-end items-end gap-8 mr-8'}>
                            <button
                                className={'transition-colors hover:text-orange-500'}
                                onClick={() => scrollToSection(homeRef)}
                            >
                                Home
                            </button>
                            <button
                                className={'transition-colors hover:text-orange-500'}
                                onClick={() => scrollToSection(servicesRef)}
                            >
                                Services
                            </button>
                            <button
                                className={'transition-colors hover:text-orange-500'}
                                onClick={() => scrollToSection(projectsRef)}
                            >
                                Projects
                            </button>
                            <button
                                className={'transition-colors hover:text-orange-500'}
                                onClick={() => scrollToSection(aboutMeRef)}
                            >
                                About Me
                            </button>
                        </div>
                        <LetsTalkButton/>
                    </div>
                )}
            </div>
            {isOpen && (
                <div
                    className={'w-[150px] h-[190px] left-60 gap-2 p-3 bg-white rounded-lg border border-zinc-500 items-start justify-start flex flex-col font-baijamjuree absolute'}
                    ref={modalRef}
                >
                    <h3 className={'font-bold w-full text-center'}>Menu</h3>
                    <button
                        className={'transition-colors hover:text-orange-500'}
                        onClick={() => scrollToSection(homeRef)}
                    >
                        Home
                    </button>
                    <button
                        className={'transition-colors hover:text-orange-500'}
                        onClick={() => scrollToSection(servicesRef)}
                    >
                        Services
                    </button>
                    <button
                        className={'transition-colors hover:text-orange-500'}
                        onClick={() => scrollToSection(projectsRef)}
                    >
                        Projects
                    </button>
                    <button
                        className={'transition-colors hover:text-orange-500'}
                        onClick={() => scrollToSection(aboutMeRef)}
                    >
                        About Me
                    </button>
                </div>
            )}
        </Fragment>
    );
};

export default Navbar;
