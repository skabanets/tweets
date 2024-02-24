import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaArrowUp } from 'react-icons/fa6';

import s from './ScrollUpButton.module.css';

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollUpBtn = classNames({
    [`${s.scrollUpBtn}`]: true,
    [`${s.hideScrollUpBtn}`]: !isVisible,
  });

  return (
    <button onClick={scrollUp} className={scrollUpBtn}>
      <FaArrowUp className={s.srcollBtnIcon} />
    </button>
  );
};
