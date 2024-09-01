export type ProjectItemProps = {
    title: string,
    imageName: string,
    links: ProjectItemLinkProps[], 
    inProgress?: boolean
}

export type ProjectItemLinkProps = {
    link: string,
    iconClass: string,
    subIconClass?: string
}