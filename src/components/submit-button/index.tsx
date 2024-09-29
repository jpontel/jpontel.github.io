interface SubmitButtonProps {
    handleClick: (e: React. FormEvent) => Promise<void>;
}

export default function SubmitButton({handleClick}: SubmitButtonProps) {
    return(
        <button
            className={'w-[180px] rounded-full p-4 styled-button-background-normal font-baijamjuree font-semibold mt-2'}
            onClick={handleClick}
        >
            Submit Now
        </button>
    )
}