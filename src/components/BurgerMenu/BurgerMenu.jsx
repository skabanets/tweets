import { NavLink } from 'react-router-dom';
import { SlClose } from 'react-icons/sl';
import s from './BurgerMenu.module.css';

export const BurgerMenu = ({ handleToggleMenu }) => {
  return (
    <div className="backdrop" onClick={handleToggleMenu}>
      <div className={s.burgerMenu} onClick={e => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={handleToggleMenu}>
          <SlClose className={s.closeIcon} />
        </button>
        <ul className={s.menuNavlist}>
          <li>
            <NavLink to="/" className={s.menuNavlink} onClick={handleToggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="tweets" className={s.menuNavlink} onClick={handleToggleMenu}>
              Tweets
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
