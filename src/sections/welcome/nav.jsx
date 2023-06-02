import { NavItem } from "./nav-item"

export const Nav = () => {
    const linkList = [
        {
            linkUrl: "#skills",
            linkLabel: "Compétences"
        },
        {
            linkUrl: "#projects",
            linkLabel: "Projets"
        },
        {
            linkUrl: "#path",
            linkLabel: "Parcours"
        },
        {
            linkUrl: "#contact",
            linkLabel: "Contact"
        }
    ]

    return <ul className="nav-list">
        {linkList.map((link, id) =>
            <NavItem key={id} linkUrl={link.linkUrl} linkLabel={link.linkLabel} />
        )}
    </ul>
}