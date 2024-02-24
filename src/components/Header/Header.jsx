import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import s from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);

    if (!isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerWrapper}>
          <Logo />
          <Navbar />
          <button onClick={handleToggleMenu} className={s.openBurgerMenuBtn}>
            <GiHamburgerMenu className={s.openMenuIcon} />
          </button>
        </div>
      </div>
      {isOpenMenu && <BurgerMenu handleToggleMenu={handleToggleMenu} />}
    </header>
  );
};
