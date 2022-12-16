import styles from './About.module.scss';
import usedTechnologies from 'data/usedTechnologies.json';
import Technology from './Technology';

function About() {
    return (
        <section className={styles.about__container}>
            <section className={styles.description__container}>
                <div className={styles.img}></div>
                <h2 className={styles.description__title}>Solving Software Problems Smartly and Simply</h2>
                <p className={styles.description__text}>All code is made thinking about being easily modified and read</p>
            </section>
            <section className={styles.me__container}>
                <div className={styles.me}>
                    <img src="assets/img/About__Second.webp" alt="" className={styles.me__img} />
                    <div className={styles.me__description}>
                        <h3 className={styles.me__title}>
                            HI, I'm Jackson
                        </h3>
                        <p className={styles.me__text}>
                        My programming journey started with me trying to make a strategy game in Unity.
                        Where I fell in love with the logic I had to apply to make something like dijkstra pathfinder.
                        Going straight to learn html, css, python...
                        Always trying to type my code for better readability
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.technologies__container}>
                <h3 className={styles.technologies__title}>Technologies:</h3>
                <section className={styles.technologies}>
                    {usedTechnologies.map((technology) => (
                        <Technology 
                            key={technology.title}
                            {...technology}
                        />
                    ))}
                </section>
            </section>
        </section>
    );
}

export default About;