import { useEffect, useRef, useState } from 'react';
import s from './Filter.module.css';
import { TfiArrowCircleDown } from 'react-icons/tfi';
import { TfiArrowCircleUp } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filter/slice';

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef(null);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleCloseList = e => {
      if (e.target !== dropdown.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleCloseList);
    return () => {
      document.removeEventListener('click', handleCloseList);
    };
  }, []);

  const handleIconClick = e => {
    e.stopPropagation();
    handleToggleDropdown();
  };

  const handleSelectOption = filter => {
    dispatch(changeFilter(filter));
  };

  return (
    <div className={s.filter}>
      <button ref={dropdown} onClick={handleToggleDropdown} className={s.dropbtn}>
        {filter}
        <span onClick={handleIconClick} className={s.iconDropBtn}>
          {isOpen ? <TfiArrowCircleUp /> : <TfiArrowCircleDown />}
        </span>
      </button>

      {isOpen && (
        <ul className={s.optionList}>
          <li onClick={() => handleSelectOption('show all')} className={s.filterOption}>
            Show all
          </li>
          <li onClick={() => handleSelectOption('follow')} className={s.filterOption}>
            Follow
          </li>
          <li onClick={() => handleSelectOption('followings')} className={s.filterOption}>
            Followings
          </li>
        </ul>
      )}
    </div>
  );
};
