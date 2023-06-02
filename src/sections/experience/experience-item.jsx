import { ExperienceItemContent } from "./experience-item-content"
import { ExperienceItemDate } from "./experience-item-date"
import { ExperienceItemDetail } from "./experience-item-detail"
import { ExperienceItemTechno } from "./experience-item-techno"

export const ExperienceItem = ({ title, titleLink, subtitle, detailList, techoList, date }) => {
    return (
        <section class="path-timeline-item">
            <ExperienceItemContent title={title} titleLink={titleLink} subtitle={subtitle}>
                <ul class="path-timeline-item-description-content">
                    {detailList.map(detailItem =>
                        <ExperienceItemDetail>{detailItem}</ExperienceItemDetail>
                    )}
                </ul>
                <ul class="path-timeline-item-description-technologies">
                    {techoList.map(techoItem =>
                        <ExperienceItemTechno iconClass={techoItem.iconClass} technoLabel={techoItem.technoLabel} />
                    )}
                </ul >
            </ExperienceItemContent>
            <ExperienceItemDate>
                {date}
            </ExperienceItemDate >
        </section>
    )
}