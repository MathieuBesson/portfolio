import { ProjectItem } from "./ProjectItem";
import portfolioData from "@/data.json"

export const Project: React.FC = () => {
    const { project: data } = portfolioData;

    return (
        <section id="projects">
            <h2>Mes projets</h2>
            <article className="projects-container">
                {data.list.map((project, id) => (
                    <ProjectItem key={id} title={project.title} imageName={project.imageName} links={project.links} />
                ))}
            </article>
        </section>
    );
}


