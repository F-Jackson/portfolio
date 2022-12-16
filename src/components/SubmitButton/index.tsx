import styles from './SubmitButton.module.scss';
import { RiMailSendFill, RiLoader4Line, RiCheckDoubleLine } from 'react-icons/ri';
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import emailjs from '@emailjs/browser';

interface Props {
    children?: React.ReactNode,
    onClick?: () => void,
    toActive: Array<string | boolean>,
    form: React.MutableRefObject<HTMLFormElement>,
    emailTemplate: string
};

type TRequest = 'waiting' | 'failed' | 'sucess' | 'sending';

function SubmitButton(props: Props) {
    const [requestState, useRequestState] = useState<TRequest>('waiting');
    const [canBeUsed, useCanBeUsed] = useState(false);
    const messages = {
        'waiting': props.children ? props.children : '',
        'failed': 'Please verify all your informations',
        'sucess': 'Your email was sent',
        'sending': 'Sending'
    }
    
    const icons = {
        'waiting': <RiMailSendFill className={styles.buttonIcon}/>,
        'sending': <RiLoader4Line className={classNames({
            [styles.buttonIcon]: true,
            [styles['buttonIcon-sending']]: true
        })}/>,
        'sucess': <RiCheckDoubleLine className={styles.buttonIcon}/>,
        'failed': <MdOutlineReportGmailerrorred className={styles.buttonIcon}/>
    };


    useEffect(() => {
        if(props.toActive.every(value => value)){
            SetCanBeUsed(true);
        } else {
            SetCanBeUsed(false);
        }
    }, [props.toActive]);


    function SetCanBeUsed(state: boolean) {
        useCanBeUsed(state);
    }

    function SendEmail(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        if(requestState === "waiting" && canBeUsed){
            SendEmailRequest();
        }
    }

    function SendEmailRequest() {
        useRequestState('sending');
        emailjs.sendForm(
            "service_iyhnf56",
            props.emailTemplate, 
            props.form.current,
            "GCljhoPI2E2VU-AbF"
        )
        .then((response) => {
            SetRequest('sucess');
        }, (error) => {
            SetRequest('failed');
        })
    }

    function SetRequest(state: TRequest) {
        useRequestState(state);
    }

    
    return (
        <button 
            type="submit" 
            className={classNames({
                [styles.button]: true,
                [styles['button-active']]: canBeUsed && requestState !== 'failed',
                [styles['button-error']]: requestState === 'failed',
                [styles['button-sucess']]: requestState === 'sucess',
                [styles['button-sending']]: requestState === 'sending'
            })}
            onClick={(event) => SendEmail(event)}
        >
            { props.children && messages[requestState] }
            {icons[requestState]}
        </button>
    );
}

export default SubmitButton;