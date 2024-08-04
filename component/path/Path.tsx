import { PathItem } from "./PathItem";
import portfolioData from "@/data.json"

export const Path: React.FC = () => {
    const { path: data } = portfolioData;

    return (
        <section id="path">
            <h2 className="path-title">Mon parcours</h2>
            <article className="path-timeline">
                {data.list.map((path, id) => (
                    <PathItem
                        key={id}
                        link={path.link} 
                        company={path.company} 
                        job={path.job} 
                        taskList={path.taskList}
                        toolList={path.toolList} 
                        startDate={path.startDate} 
                        endDate={path.endDate}
                        contractType={path.contractType}
                    />
                ))}

            </article>
        </section>
    )
}





