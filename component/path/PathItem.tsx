import { PathItemProps } from "@/types/path";
import { PathItemTask } from "./PathItemTask";
import { PathItemTool } from "./PathItemTool";

export const PathItem: React.FC<PathItemProps> = ({ link, company, job, taskList, toolList, startDate, endDate, contractType }) => {
    return (
        <section className="path-timeline-item">
            <div className="path-timeline-item-description">
                <a href={link} target="_blank">
                    <h3>{job}</h3>
                    <h4><span className="path-timeline-item-description-contract-company">{company}</span> | <span className="path-timeline-item-description-contract-type">{contractType}</span></h4>
                </a>
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





