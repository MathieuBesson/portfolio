import { ProjectItemProps } from "@/types/project";
import { ProjectItemLink } from "./ProjectItemLink";

export const ProjectItem: React.FC<ProjectItemProps> = ({title, imageName, links}) => {
    return (
        <article className="projects-item">
            <section className="projects-item-container">
                <div className="projects-item-container-block">
                    <div className={`projects-item-container-block-${imageName}`}></div>
                </div>
                <div className="projects-item-container-content">
                    <h3>{title}</h3>
                    <div className="projects-item-container-content-group">
                        {links.map((link, id) => (
                            <ProjectItemLink key={id} link={link.link} iconClass={link.iconClass} />
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}


