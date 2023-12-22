import { Link } from 'react-router-dom'
import { MENU_ITEMS } from '../../constants'
import './Menu.scss'

const Menu = () => {
  return (
    <ul className="menu">
      {MENU_ITEMS.map(({ path, name }) => {
        return (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
