export const ExperienceItemDetail = ({ children }) => {
    return (
        <li>
            <i class="far fa-arrow-alt-circle-right"></i>
            <td dangerouslySetInnerHTML={{ __html: children }} />
        </li>
    )
}