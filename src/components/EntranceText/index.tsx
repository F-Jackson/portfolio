import styles from './EntranceText.module.scss';

interface Props {
    title: string
    text?: string
}

export default function EntranceText(props: Props) {
    return (
        <div className={styles.entrance__container}>
            <div className={styles.entranceText}>
                <h2 className={styles.title}>{props.title}</h2>
                { props.text && <p className={styles.text}>{props.text}</p>}
            </div>
        </div>
    );
}