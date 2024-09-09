import {ButtonProps} from "../get-in-touch-button";

export default function ViewAllWorksButton({variation}: ButtonProps) {
    const styles = {
        'primary':'w-[180px] bg-white rounded-full md:text-[16px] xsm:text-[13px] p-4 hover:transition-colors styled-button-background hover:text-white',
        'secondary':'xsm:w-[150px] md:text-[16px] xsm:text-[11px] md:w-[200px] xsm:h-[50px] md:h-[60px] rounded-full border-white border-4 xsm:p-2 md:p-3 transition-colors hover:bg-white hover:text-black'
    };

    return (
        <button
            className={`${variation === 'primary' ? styles.primary : styles.secondary}`}
            onClick={() => window.open('https://github.com/jpontel', '_blank')}
        >
            VIEW ALL WORKS
        </button>
    )
}