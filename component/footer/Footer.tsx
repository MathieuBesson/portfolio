import portfolioData from "@/data.json"

export const Footer: React.FC = () => {
    const { footer: data } = portfolioData;

    return (
        <footer>
            <article className="footer-contact">
                <h2 className="footer-contact-job">Mathieu Besson</h2>
                <div>
                    {data.infoList.map((info, id) => (
                        <p key={id}>{info}</p>
                    ))}
                </div>
            </article>
            <article className="footer-social">
                <ul className="footer-social-devicon-group">
                    {data.socialNetworkList.map((socialNetwork, id) => (
                        <li key={id}>
                            <a href={socialNetwork.link} target="_blank">
                                <i className={socialNetwork.iconClass}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </article>
        </footer>
    )
}