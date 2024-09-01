import { ProjectItemLinkProps } from "@/types/project";

export const ProjectItemLink: React.FC<ProjectItemLinkProps> = ({link, iconClass, subIconClass}) => {
    return (
        <a className="projects-container-item-content-group-link"
            href={link} target="_blank">
            <i className={iconClass}></i>
            <i className={`${subIconClass} projects-container-item-content-group-link-sub`}></i>
        </a>

    );
}


