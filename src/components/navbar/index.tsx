export default function Navbar() {
    return (
        <div className={'w-full inline-flex p-4 text-white  justify-between px-32 mt-2'}>
            <div className={'inline-flex gap-4'}>
                <div className={'font-baijamjuree font-bold text-xl'}>
                    GUIGO
                </div>
                <div>
                    Home
                </div>
                <div>
                    Services
                </div>
                <div>
                    Projects
                </div>
                <div>
                    About Me
                </div>
            </div>
            <div>
                <button className={'w-[120px] bg-white rounded-full text-black font-semibold p-2'}>
                    Let's Talk
                </button>
            </div>
        </div>
    )
}