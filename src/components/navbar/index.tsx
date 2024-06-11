export default function Navbar() {
    return(
        <div className={'inline-flex p-4 text-white gap-4 items-center justify-center'}>
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
            <button className={'bg-white rounded-full text-black font-bold p-2'}>
                Let's Talk
            </button>
        </div>
    )
}