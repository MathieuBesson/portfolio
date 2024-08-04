export type PathItemProps = {
    company: string,
    link: string,
    job: string,
    contractType: string,
    startDate: string,
    endDate: string,
    taskList: string[],
    toolList: PathItemToolProps[]
}

export type PathItemToolProps = {
    children: string,
    iconClass: string
}