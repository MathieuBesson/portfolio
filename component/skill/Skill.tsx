import { SkillGroup } from "./SkillGroup"
import portfolioData from "@/data.json"

export const Skill: React.FC = () => {
    const { skill: data } = portfolioData;

    return <section id="skills">
        <h2 className="skills-title">Compétences</h2>
        <div className="skills-group">
            {data.typeList.map((type, id) => (
                <SkillGroup key={id} title={type.title} skillList={type.skillList} />
            ))}
        </div>
    </section>
}



