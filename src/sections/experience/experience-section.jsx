import { SecondaryTitle } from "../../components/secondary-title"
import { ExperienceItem } from "./experience-item";
import { experienceList } from "../../../data/experiences"


export const ExperienceSection = () => {
    return (
        <section id="path">
            <SecondaryTitle>
                Mon parcours
            </SecondaryTitle>
            <article class="path-timeline">
                {
                    experienceList.map(experienceItem =>
                        <ExperienceItem
                            title={experienceItem.title}
                            titleLink={experienceItem.titleLink}
                            subtitle={experienceItem.subtitle}
                            detailList={experienceItem.detailList}
                            techoList={experienceItem.techoList}
                            date={experienceItem.date}
                        />
                    )
                }
            </article>
        </section>
    )
}