import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav>
      <ul className={s.navlist}>
        <li>
          <NavLink to="/" className={s.navlink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="tweets" className={s.navlink}>
            Tweets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
