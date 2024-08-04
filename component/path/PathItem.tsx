import { PathItemProps } from "@/types/path";
import { PathItemTask } from "./PathItemTask";
import { PathItemTool } from "./PathItemTool";

export const PathItem: React.FC<PathItemProps> = ({link, company, job, taskList, toolList, startDate, endDate }) => {
    return (
        <section className="path-timeline-item">
            <div className="path-timeline-item-description">
                <h3><a href={link} target="_blank">{company}</a></h3>
                <h4>{job}</h4>
                <ul className="path-timeline-item-description-content">
                    {taskList.map((task, id) => (
                        <PathItemTask key={id}>{task}</PathItemTask>
                    ))}
                </ul>
                <ul className="path-timeline-item-description-technologies">
                    {toolList.map((tool, id) => (
                        <PathItemTool key={id} iconClass={tool.iconClass} >{tool.children}</PathItemTool>
                    ))}
                </ul>
            </div>
            <div className="path-timeline-item-marker"></div>
            <p className="path-timeline-item-date">
                <em>
                    {startDate} - {endDate ? endDate : 'En cours...'}
                </em>
            </p>
        </section>
    )
}




