import { PathItemToolProps } from "@/types/path"

export const PathItemTool: React.FC<PathItemToolProps> = ({iconClass, children}) => {
    return (
        <li>
            <i className={iconClass}></i>
            {children}
        </li>
    )
}