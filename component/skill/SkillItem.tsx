import { SkillItemProps } from "@/types/skill"

export const SkillItem: React.FC<SkillItemProps> = ({ iconClass, children }) => {
    return (
        <div className="skills-group-type-block">
            <i className={iconClass}></i>
            <span>{children}</span>
        </div>
    )
}



