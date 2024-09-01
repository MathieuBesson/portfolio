import { ProjectItemProps } from "@/types/project";
import { ProjectItemLink } from "./ProjectItemLink";

export const ProjectItem: React.FC<ProjectItemProps> = ({title, imageName, links}) => {
    return (
            <section className="projects-container-item">
                <div className="projects-container-item-block">
                    <div 
                        className={`projects-container-item-block-img`} 
                        style={{background: `url(/asset/image/project/${imageName}) center center / cover no-repeat`}}
                        >
                    </div>
                </div>
                <div className="projects-container-item-content">
                    <h3>{title}</h3>
                    <div className="projects-container-item-content-group">
                        {links.map((link, id) => (
                            <ProjectItemLink key={id} link={link.link} iconClass={link.iconClass} subIconClass={link.subIconClass} />
                        ))}
                    </div>
                </div>
            </section>
    );
}


