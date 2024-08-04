export type SkillItemProps = {
    iconClass: string,
    children: string
}

export type SkillGroupProps = {
    title: string,
    skillList: SkillItemProps[]
}