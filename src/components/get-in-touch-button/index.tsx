import {useNavigate} from 'react-router-dom';

export interface ButtonProps {
    variation: 'primary' | 'secondary';
}

export default function GetInTouchButton({variation}: ButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/get-in-touch');
    }

    const styles = {
        'primary':'w-[180px] bg-white rounded-full md:text-[16px] xsm:text-[13px] p-4 hover:transition-colors styled-button-background hover:text-white',
        'secondary':'xsm:w-[150px] md:text-[16px] xsm:text-[11px] md:w-[200px] xsm:h-[50px] md:h-[60px] rounded-full border-white border-4 xsm:p-2 md:p-3 transition-colors hover:bg-white hover:text-black'
    };

    return (
        <button
            className={`${variation === 'primary' ? styles.primary : styles.secondary}`}
            onClick={handleClick}
        >
            GET IN TOUCH
        </button>
    );
}
