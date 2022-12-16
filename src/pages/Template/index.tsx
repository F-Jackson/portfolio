import { Outlet } from "react-router-dom";
import styles from './Template.module.scss';

export default function Template() {
    return(
        <main className={styles.main__container}>
            <Outlet />
        </main>
    );
}