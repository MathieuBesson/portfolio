import { SkillGroupProps } from "@/types/skill"
import { SkillItem } from "./SkillItem"

export const SkillGroup: React.FC<SkillGroupProps> = ({title, skillList}) => {
    return (
        <div className="skills-group-type back-end-skills">
            <h3 className="skills-group-type-title">{title}</h3>
            {skillList.map((skill, id) => 
                <SkillItem key={id} iconClass={skill.iconClass}>{skill.children}</SkillItem>
            )}
        </div>
    )
}



