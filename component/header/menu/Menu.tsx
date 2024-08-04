import Image from "next/image"

export const Menu: React.FC = () => {
    return <>
        <nav className="menu">
            <div className="menu-name">
                <Image className="menu-name-img" src="asset/image/avatar.svg" alt="Avatar Mathieu Besson" width={60} height={60}></Image>
                <h1 className="menu-name-title">Mathieu Besson</h1>
            </div>
            <ul className="menu-list">
                <li className="menu-list-item">
                    <a className="menu-list-item-link" href="#skills">Compétences</a>
                </li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="#projects">Projets</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="#path">Parcours</a></li>
                <li className="menu-list-item"><a className="menu-list-item-link" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </>
}