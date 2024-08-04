export const PathItemTask: React.FC<{ children: string }> = ({ children }) => {
    return (
        <li>
            <i className="icon-corner-down-right"></i>
            <p dangerouslySetInnerHTML={{ __html: children }} />
        </li>
    )
}





