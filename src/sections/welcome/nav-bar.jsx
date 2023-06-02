import { LogoPresentation } from "./logo-presentation"
import { Nav } from "./nav"

export const NavBar = () => {
    return <nav className="nav-bar">
        <LogoPresentation />
        <Nav />
    </nav>
}