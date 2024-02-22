import { useDispatch, useSelector } from 'react-redux';
import { selectTotalUsers, setInitialValue } from '../../redux/users/slice';
import { TweetCard } from '../TweetCard/TweetCard';
import s from './TweetCardsList.module.css';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { fetchTotalUsers, fetchUsers } from '../../redux/users/operations';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';

export const TweetCardsList = () => {
  const [page, setPage] = useState(1);
  const limit = 3;
  const totalUsers = useSelector(selectTotalUsers);
  const totalPages = Math.ceil(totalUsers / limit);
  const [loadedUsers, setLoadedUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (page === 1) {
      dispatch(setInitialValue());
      dispatch(fetchTotalUsers());
    }
    dispatch(fetchUsers(page))
      .unwrap()
      .then(newUsers => {
        setLoadedUsers(prevUsers => [...prevUsers, ...newUsers]);
      })
      .catch(error => {
        toast.error('Something went wrong! Reload page or try again later.');
      });
  }, [page, dispatch]);

  const handleClickLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <ul className={s.tweetsCardsList}>
        {loadedUsers.length !== 0 &&
          loadedUsers.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
      </ul>
      {page < totalPages && <LoadMoreButton handleClickButton={handleClickLoadMoreBtn} />}
    </div>
  );
};
