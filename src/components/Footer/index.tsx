import styles from './Footer.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { SiLinkedin } from 'react-icons/si';
import { FaRegCopyright } from 'react-icons/fa'
import SubmitButton from 'components/SubmitButton';
import { TextsInput } from 'components/TextsInputs';
import { useRef, useState } from 'react';

export default function Footer() {
    const [emailState, useEmailState] = useState("");

    const form = useRef() as React.MutableRefObject<HTMLFormElement>;

    function openLink(url: string) {
        window.open(url);
    }

    async function copyText(url: string) {;
        if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(url);
        }
        else {
            document.execCommand("copy", true, url);
        }
    }

    function iconClick(url: string) {
        copyText(url);
        openLink(url);
    }

    
    return (
        <footer 
            className={styles.footer}
        >
            <div className={styles.secondContainer}>
                <div className={styles.social}>
                    <VscGithubInverted 
                        className={styles.icons} 
                        onClick={() => iconClick("https://github.com/F-Jackson")}     
                    />
                    <SiLinkedin 
                        className={styles.icons} 
                        onClick={() => iconClick("https://www.linkedin.com/in/f-jackson/")}  
                    />
                </div>
                <form 
                    className={styles.sendEmail}
                    ref={form}
                >
                    <label htmlFor="user_email"></label>
                    <TextsInput
                        type="email" name="user_email" 
                        id="user_email" placeholder='leave your email'
                        required={true} useValue={emailState}
                        setValue={useEmailState} regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
                    /> 
                    <SubmitButton 
                        toActive={[emailState]}
                        form={form}
                        emailTemplate={'template_i9a0afe'}
                    />
                </form>
                <div className={styles.copyright__container}>
                    Copyright
                    <FaRegCopyright className={styles.copyright__icon}/>
                </div>
            </div>
        </footer>
    );
}