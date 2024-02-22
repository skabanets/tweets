import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import s from './ButtonGoBack.module.css';

export const ButtonGoBack = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/');
  };
  return (
    <button className={s.goBackButton} onClick={handleClickButton} type="button">
      <IoChevronBackCircleOutline /> Go back
    </button>
  );
};
