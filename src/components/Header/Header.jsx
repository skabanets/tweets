import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerWrapper}>
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};
