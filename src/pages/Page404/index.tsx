import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.scss';

export default function Page404() {
    const navigate = useNavigate();

    return (
        <section className={styles.Page404__container}>
            <div className={styles.Page404__text__container}>
                <p className={styles.Page404__text}>ERROR!</p>
                <p className={styles.Page404__number}>404</p>
                <p className={styles.Page404__text}>PAGE NOT FOUND</p>
            </div>
            <button className={styles.Page404__button} onClick={() => navigate(-1)}>Previous Page</button>
        </section>
    );
}