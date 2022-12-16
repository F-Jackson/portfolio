import styles from './Technology.module.scss';

interface ITechnologies {
    title: string,
    technologies: string[],
    img: string
}

function Technology(props: ITechnologies) {
    return (
        <article className={styles.technology}>
            <img src={props.img} alt="imageofok" className={styles.img} />
            <h4 className={styles.technology__title}>{props.title}</h4>
            <ul className={styles.technology__list}>
                {props.technologies.map((technology) => (
                    <li className={styles.technology__item}>{technology}</li>
                ))}
            </ul>
        </article>
    );
}

export default Technology;