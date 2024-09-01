export type ProjectItemProps = {
    title: string,
    imageName: string,
    links: ProjectItemLinkProps[], 
}

export type ProjectItemLinkProps = {
    link: string,
    iconClass: string,
    subIconClass?: string
}