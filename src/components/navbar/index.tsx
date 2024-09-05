import React from 'react';

type NavbarProps = {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    homeRef: React.RefObject<HTMLDivElement>;
    servicesRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    aboutMeRef: React.RefObject<HTMLDivElement>;
};

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, homeRef, servicesRef, projectsRef, aboutMeRef }) => {
    return (
        <div className={'w-full inline-flex p-4 text-white justify-between lg:px-[250px] mt-2'}>
            <div className={'inline-flex justify-center text-center items-center gap-6 '}>
                <div className={'font-baijamjuree font-bold text-xl mr-12'}>
                    GUIGO
                </div>
            </div>
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
                <button className={'w-[120px] bg-white rounded-full text-black font-semibold p-2 font-baijamjuree'}>
                    Let's Talk
                </button>
            </div>
        </div>
    );
};

export default Navbar;
