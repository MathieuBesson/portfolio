export const SkillItem = ({ children, skillLabel, iconClass }) => {
    return (
        <div class="skills-group-type-block">
            {iconClass && <i class={iconClass}></i>}
            {children}
            <span>{skillLabel}</span>
        </div>
    )
}