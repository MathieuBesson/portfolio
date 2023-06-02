export const ExperienceItemContent = ({ children, title, titleLink, subtitle }) => {
    return (
        <div class="path-timeline-item-description">
            <h3><a href={titleLink} target="_blank">{title}</a></h3>
            <h4>{subtitle}</h4>
            {children}
        </div>
    )
}