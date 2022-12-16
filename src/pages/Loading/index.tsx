import styles from './Loading.module.scss';

export default function Loading() {
    return (
        <section className={styles.loading__container}>
            <div className={styles.loading__icon}>
                <p className={styles.loading__icon__text}>Loading...</p>
            </div>
        </section>
    );
}