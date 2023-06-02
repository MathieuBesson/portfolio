import { SecondaryTitle } from "../../components/secondary-title"
import { ProjectItem } from "./project-item"
import { projectList } from "../../../data/projects"

export const ProjectSection = () => {
    return (
        <section id="projects">
            <SecondaryTitle>Mes projets</SecondaryTitle>
            <article class="projects-list">
                {projectList.map(projectItem =>
                    <ProjectItem
                        title={projectItem.title}
                        onlineLink={projectItem.onlineLink}
                        repositoryLink={projectItem.repositoryLink}
                    />
                )}
            </article>
        </section>
    )
}