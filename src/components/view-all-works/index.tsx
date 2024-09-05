import {ButtonProps} from "../get-in-touch";

export default function ViewAllWorksButton({variation}: ButtonProps) {
    return (
        <button
            className={`${variation === 'primary' ? 'w-[180px] text-white p-4 rounded-full border-white border-4 hover:bg-white hover:transition-colors hover:text-black' : 'w-[200px] h-[60px] rounded-full border-white border-4 p-3 transition-colors hover:bg-white hover:text-black'}`}
            onClick={() => window.open('https://github.com/jpontel', '_blank')}
        >
            VIEW ALL WORKS
        </button>
    )
}