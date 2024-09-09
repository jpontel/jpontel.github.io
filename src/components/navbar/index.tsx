import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LetsTalkButton from "../lets-talk-button";
import {useNavigate} from "react-router-dom";
import React from 'react';
import {isMobile} from "@/util";

type NavbarProps = {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    homeRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    aboutMeRef: React.RefObject<HTMLDivElement>;
};

const Navbar: React.FC<NavbarProps> = ({scrollToSection, homeRef, servicesRef, projectsRef, aboutMeRef}) => {
    const navigate = useNavigate();
    const mobile = isMobile();

    const handleReturnMainPage = () => {
        navigate('/');
    };

    return (
        <div className={'w-full inline-flex p-4 text-white justify-between md:px-[250px] xsm:px-[30px] mt-2 font-baijamjuree '}>
            <div className={'inline-flex justify-center text-center items-center gap-6 '}>
                <button
                    className={'font-bold text-xl mr-12'}
                    onClick={handleReturnMainPage}
                >
                    GUIGO
                </button>
            </div>
            {mobile ? (
                    <div>
                        <button className={'w-8 h-8 p-4 rounded-full bg-white border border-zinc-500 flex items-center justify-center'}>
                            <MenuRoundedIcon style={{color:"#000"}}/>
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
    );
};

export default Navbar;
