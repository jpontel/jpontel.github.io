import {useNavigate} from 'react-router-dom';

export interface ButtonProps {
    variation: 'primary' | 'secondary';
}

export default function GetInTouchButton({variation}: ButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/get-in-touch');
    }

    return (
        <button
            className={`${variation === 'primary' ? 'w-[180px] bg-white rounded-full p-4 hover:transition-colors styled-button-background hover:text-white' : 'w-[200px] h-[60px] rounded-full border-white border-4 p-3 transition-colors hover:bg-white hover:text-black'}`}
            onClick={handleClick}
        >
            GET IN TOUCH
        </button>
    );
}
