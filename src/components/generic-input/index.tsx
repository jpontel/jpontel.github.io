import React from 'react';

interface GenericInputProps {
    label: string;
    name: string;
    placeholder?: string;
    type: string;
    value: string;
    isText?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const LabeledInput: React.FC<GenericInputProps> = ({value, label, placeholder, type, isText, onChange, name}) => {
    return (
        <div className={'flex flex-col mb-4'}>
            <label className={'text-white mb-2 font-semibold xsm:text-[12px] md:text-[15px]'}>{label}</label>
            {isText ? (
                <textarea
                    placeholder={placeholder ? placeholder : 'Type Here...'}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={'p-[10px] rounded-lg bg-[#1C1C22] text-[13px]'}
                    rows={5}
                />
            ) : (
                <input
                    placeholder={placeholder ? placeholder : 'Type Here...'}
                    type={type}
                    value={value}
                    onChange={onChange}
                    name={name}
                    required
                    className={'p-[10px] rounded-lg bg-[#1C1C22] text-[13px]'}
                />
            )}
        </div>
    );
};

export default LabeledInput;