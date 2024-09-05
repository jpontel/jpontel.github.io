import GenericInput from '@/components/generic-input';
import SubmitButton from "@/components/submit-button";
import emailIcon from '@/assets/email-icon.svg';
import phoneIcon from '@/assets/phone-icon.svg';

export default function GetInTouchPage() {
    return (
        <div className={'w-full h-[65vh] flex flex-col text-white lg:px-[250px] lg:pt-[100px] font-baijamjuree '}>
            <div className={'w-full h-full inline-flex'}>
                <div className={'w-full h-full flex flex-col'}>
                    <div className={'styled-text font-bold text-[60px]'}>
                        Get in touch
                    </div>
                    <p className={'text-[15px] w-1/2 leading-8'}>
                        Have a project in your mind? Looking to partner or work together? Reach out trough the form and i'll get back to you in the next 48 hours.
                    </p>
                    <div className={'flex flex-col gap-5 mt-5 font-semibold'}>
                        <div className={'inline-flex'}>
                            <img src={emailIcon} alt={'Email'} className={'mr-2'}/>
                            <p>jpontel2002@gmail.com</p>
                        </div>
                        <div className={'inline-flex'}>
                            <img src={phoneIcon} alt={'Phone Number'} className={'mr-2'}/>
                            <p>(41) 98497-4864</p>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col w-full h-full'}>
                    <GenericInput placeholder={'Enter your name...'} type={'text'} label={'Name'} />
                    <GenericInput placeholder={'Enter your email...'} type={'text'} label={'Email'} />
                    <GenericInput type={'text'} label={'Your Budget'} />
                    <GenericInput type={'text'} label={"Tell me a bit more what you're looking for"} isText />
                    <SubmitButton/>
                </div>
            </div>
        </div>
    )
}