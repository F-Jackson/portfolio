import styles from './Project.module.scss';


interface Props {
    img: string,
    title: string,
    description: string,
    link: string
}

export default function Project(props: Props) {
    return (
        <article className={styles.project}>
            <a href={props.link}>
                <img src={props.img} alt="Project" className={styles.project__img}/>
            </a>
            <div className={styles.project__description}>
                <h3 className={styles.project__title}>
                    {props.title}
                </h3>
                <div className={styles.project__text}>
                    <p>{props.description}</p>
                    <a href={props.link}>See Project</a>
                </div>
            </div>
        </article>
    );
}