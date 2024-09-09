import React from 'react';

interface GenericInputProps {
    label: string;
    placeholder?: string;
    type: string;
    isText?: boolean;
}

const LabeledInput: React.FC<GenericInputProps> = ({label, placeholder, type, isText}) => {
    return (
        <div className={'flex flex-col mb-4'}>
            <label className={'text-white mb-2 font-semibold'}>{label}</label>
            {isText ? <textarea placeholder={placeholder ? placeholder : 'Type Here...'} className={'p-[10px] rounded-lg bg-[#1C1C22] text-[13px]'} rows={5}/> :
                <input placeholder={placeholder ? placeholder : 'Type Here...'} type={type} className={'p-[10px] rounded-lg bg-[#1C1C22] text-[13px]'}/>}
        </div>
    );
};

export default LabeledInput;