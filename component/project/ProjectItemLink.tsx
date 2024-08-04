import { ProjectItemLinkProps } from "@/types/project";

export const ProjectItemLink: React.FC<ProjectItemLinkProps> = ({link, iconClass}) => {
    return (
        <a className="projects-item-container-content-group-link"
            href={link} target="_blank">
            <i className={iconClass}></i>
        </a>

    );
}


