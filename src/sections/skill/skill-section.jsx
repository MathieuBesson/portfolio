import { SecondaryTitle } from "../../components/secondary-title"
import { SkillBlockTitle } from "./skill-block-title"
import { SkillItem } from "./skill-item"
import { skillBlockList } from "../../../data/skills"

export const SkillSection = () => {

    return <section id="skills">
        <SecondaryTitle>
            Compétences
        </SecondaryTitle>
        <div class="skills-group">
            {
                skillBlockList.map(skillBlockItem =>
                    <div class="skills-group-type back-end-skills">
                        <SkillBlockTitle>{skillBlockItem.skillBlockTitle}</SkillBlockTitle>
                        {skillBlockItem.skillList.map(skillItem =>
                            <SkillItem skillLabel={skillItem.skillLabel} iconClass={skillItem.iconClass} >
                                {skillItem.customIcon}
                            </SkillItem>
                        )}
                    </div>
                )
            }
        </div>
    </section>
}
