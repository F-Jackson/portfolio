import styles from './Projects.module.scss';
import Project from './Project';
import EntranceText from 'components/EntranceText';
import projects from 'data/projects.json';

function Projects() {
    return(
        <section className={styles.projects__container}>
            <EntranceText 
                title={'My -Projects'}
            />
            <div className={styles.projects}>
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;