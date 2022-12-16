import SubmitButton from 'components/SubmitButton';
import {TextsInput, TextAreaInput} from 'components/TextsInputs';
import styles from './Contact.module.scss';
import { FaTelegram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import EntranceText from 'components/EntranceText';

function Contact() {
    const [copyAlertState, useCopyAlertState] = useState(false);
    const [nameState, useNameState] = useState("");
    const [emailState, useEmailState] = useState("");
    const [messageState, useMessageState] = useState("");

    const form = useRef() as React.MutableRefObject<HTMLFormElement>;

    let timeOut: ReturnType<typeof setTimeout>;

    async function Copy(link: string) {
        if('clipboard' in navigator) {
            await navigator.clipboard.writeText(link);
        }
        else {
            document.execCommand('copy', true, link);
        }
        
        SetCopyAlert(true);

        if(timeOut) {
            clearTimeout(timeOut);
        }

        timeOut = setTimeout(() => SetCopyAlert(false), 2500);
    }

    function SetCopyAlert(status: boolean) {
        useCopyAlertState(() => (status));
    }

    return (
        <section className={styles.contact__container}>
            <EntranceText 
                title={'Contact -Me'}
            />
            <form 
                ref={form} 
                className={styles.contact__form}
            >
                <span className={styles.blackH}></span>
                <span className={styles.blackV}></span>
                <div className={styles.first__container}>
                    <section className={styles.icons_container}>
                        <FaTelegram 
                            onClick={() => Copy("https://t.me/+5511949097973")} 
                            className={styles.icons} 
                        />
                        <FaLinkedin 
                            onClick={() => Copy("https://www.linkedin.com/in/f-jackson/")} 
                            className={styles.icons}
                        />
                        <FaWhatsapp 
                            onClick={() => Copy("https://wa.me/5511949097973")} 
                            className={styles.icons}
                        />
                        <span className={classnames({
                            [styles.copied__alert]: true,
                            [styles['copied__alert-active']]: copyAlertState
                        })}>Copied</span>
                    </section>
                    <label htmlFor='user_name'>Name:</label>
                    <TextsInput 
                        type="text" name="user_name" 
                        id="user_name" placeholder="your name" 
                        required={true} useValue={nameState}
                        setValue={useNameState}
                    />
                    <label htmlFor='user_email'>Email:</label>
                    <TextsInput 
                        type="email" name="user_email" 
                        id="user_email" placeholder="example@email.com" 
                        required={true} useValue={emailState}
                        setValue={useEmailState} regex={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}
                    />
                </div>
                <span className={styles.blackV}></span>
                <span className={styles.blackH}></span>

                <span className={styles.border__top}></span>
                <span className={styles.border__left}></span>
                <div className={styles.second__container}>
                    <label htmlFor="message">Message:</label>
                    <TextAreaInput 
                        name="message" id="message" 
                        cols={30} rows={10} 
                        placeholder="Send your message" required={true}
                        useValue={messageState} setValue={useMessageState}
                    ></TextAreaInput>
                    <SubmitButton 
                        toActive={[nameState, emailState, messageState]}
                        form={form}
                        emailTemplate={'template_1bd63vk'}
                    >
                        Send Your Message
                    </SubmitButton>
                </div>
                <span className={styles.border__right}></span>
                <span className={styles.border__bottom}></span>
            </form>
        </section>
    );
}

export default Contact;