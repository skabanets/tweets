import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import { IoArrowForwardSharp } from 'react-icons/io5';

import s from './NavigateButton.module.css';

export const NavigateButton = ({ route, text }) => {
  const navigate = useNavigate();
  const [isLink, setIsLink] = useState('/');
  const [isButtonText, setIsButtonText] = useState('Go back');

  useEffect(() => {
    if (route && text) {
      setIsLink(route);
      setIsButtonText(text);
    }
  }, [route, text]);

  const handleClickButton = () => {
    navigate(isLink);
  };

  return (
    <button className={s.navigateButton} onClick={handleClickButton} type="button">
      {isLink === '/' && <IoArrowBackOutline />} {isButtonText}
      {isLink !== '/' && <IoArrowForwardSharp />}
    </button>
  );
};
