import styles from './TextsInputs.module.scss';

interface Input {
    name: string,
    id: string,
    required?: boolean,
    placeholder?: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    useValue: string
}
interface TextsInputProps extends Input {
    type?: string,
    regex?: RegExp
} 

interface TextAreaInputProps extends Input {
    cols: number,
    rows: number
}


function TextsInput(props: TextsInputProps) {
    function validate(value: string, validator: RegExp) {
        if(validator.test(value)){
            SetValue(value);
        }
        else {
            SetValue("");
        }
    };

    function SetValue(value: string) {
        props.setValue(_ => value);
    }

    return (
        <input
            type={props.type ? props.type : "text"}
            name={props.name}
            id={props.id} 
            required={props.required}
            placeholder={props.placeholder}
            className={styles.texts__input}
            onChange={(event) => props.regex ? validate(event.target.value, props.regex) : SetValue(event.target.value)}
        />
    );
}

function TextAreaInput(props: TextAreaInputProps) {
    return (
        <textarea
            name={props.name}
            id={props.id} 
            required={props.required}
            placeholder={props.placeholder}
            cols={props.cols}
            rows={props.rows}
            className={styles.textarea__input}
            onChange={(event) => props.setValue(_ => event.target.value)}
            value={props.useValue}
        />
    );
}

export {TextsInput , TextAreaInput}