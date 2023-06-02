export const NavItem = ({ linkUrl, linkLabel }) => {
    return <li className="nav-item">
        <a className="nav-item-link" href={linkUrl}>{linkLabel}</a>
    </li>
}