import { Banner } from "./banner/Banner"
import { Menu } from "./menu/Menu"

export const Header: React.FC = () => {
  return <header>
    <Menu />
    <Banner />
  </header>
}