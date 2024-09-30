import React, { Fragment, useEffect, useRef, useState } from "react";
import GenericInput from '@/components/generic-input';
import SubmitButton from '@/components/submit-button';
import emailIcon from '@/assets/email-icon.svg';
import phoneIcon from '@/assets/phone-icon.svg';

function StyledDiv({ message, onClose }: { message: string, onClose: () => void }) {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={divRef} className={'w-[300px] border border-slate-400 h-[100px] font-bold font-baijamjuree text-white bg-zinc-800 rounded-lg p-6 text-center items-center'}>
            {message}
        </div>
    );
}

export default function GetInTouchPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        setIsLoading(true);
        e.preventDefault();
        const payload = {
            sender_email: formData.email,
            subject: formData.name,
            message: formData.message
        };
        try {
            const response = await fetch('http://3.145.116.102:8080/portfolio/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                setIsLoading(false);
                setMessage('Form submitted successfully!');
            } else {
                setIsLoading(false);
                setMessage('Error');
            }
        } catch (e) {
            console.error(e);
            setIsLoading(false);
            setMessage('Error');
        }
    };

    const handleCloseMessage = () => {
        setMessage('');
    };

    return (
        <Fragment>
            {isLoading && (
                <div className={'w-full h-full items-center justify-center absolute flex'}>
                    <StyledDiv message={'Loading...'} onClose={handleCloseMessage} />
                </div>
            )}
            {message && (
                <div className={'w-full h-full items-center justify-center absolute flex'}>
                    <StyledDiv message={message} onClose={handleCloseMessage} />
                </div>
            )}
            <div className={'w-full h-[80vh] flex flex-col text-white lg:px-[250px] lg:pt-[100px] font-baijamjuree '}>
                <div className={'w-full h-full inline-flex'}>
                    <div className={'w-full h-full flex flex-col'}>
                        <div className={'styled-text font-bold text-[60px]'}>
                            Get in touch
                        </div>
                        <p className={'text-[15px] w-2/3 leading-8'}>
                            Have a project in your mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
                        </p>
                        <div className={'flex flex-col gap-5 mt-5 font-semibold'}>
                            <div className={'inline-flex'}>
                                <img src={emailIcon} alt={'Email'} className={'mr-2'} />
                                <p>jpontel2002@gmail.com</p>
                            </div>
                            <div className={'inline-flex'}>
                                <img src={phoneIcon} alt={'Phone Number'} className={'mr-2'} />
                                <p>(41) 98497-4864</p>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col w-full h-full gap-3'}>
                        <GenericInput
                            placeholder={'Enter your name...'}
                            value={formData.name}
                            onChange={handleChange}
                            type={'text'}
                            label={'Name'}
                            name="name"
                        />
                        <GenericInput
                            placeholder={'Enter your email...'}
                            value={formData.email}
                            onChange={handleChange}
                            type={'text'}
                            label={'Email'}
                            name="email"
                        />
                        <GenericInput
                            type={'text'}
                            value={formData.message}
                            onChange={handleChange}
                            label={"Tell me a bit more what you're looking for"}
                            isText
                            name="message"
                        />
                        <SubmitButton handleClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}