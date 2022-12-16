import styles from './Home.module.scss';

function Home() {

    return (
        <section className={styles.home__container}>
            <div className={styles.description__container}>
                <h1><strong>F.Jackson</strong> <em>Python | React Developer</em></h1>
                <p>Hi. I'm Jackson and i'm always trying to improve myself to give you the best.</p>
            </div>
            <div className={styles.img__container}>
                <img src={process.env.PUBLIC_URL + 'assets/img/person.png'} alt="ew" />
            </div>
        </section>
    );
}

export default Home;