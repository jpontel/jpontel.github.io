import React from "react";

interface SubmitButtonProps {
    handleClick: (e: React. FormEvent) => Promise<void>;
}

export default function SubmitButton({handleClick}: SubmitButtonProps) {
    return(
        <button
            className={'xsm:w-[130px] md:w-[180px] md:text-[15px] xsm:text-[13px] rounded-full p-4 styled-button-background-normal font-baijamjuree font-semibold mt-2'}
            onClick={handleClick}
        >
            Submit Now
        </button>
    )
}