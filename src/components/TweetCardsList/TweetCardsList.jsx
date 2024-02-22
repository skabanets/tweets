import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading, selectUsers } from '../../redux/users/slice';
import { TweetCard } from '../TweetCard/TweetCard';
import s from './TweetCardsList.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { ErrorContent } from '../ErrorContent/ErrorContent';

export const TweetCardsList = () => {
  const [page, setPage] = useState(1);
  const limit = 3;
  const users = useSelector(selectUsers);
  const totalUsers = users.length;
  const totalPages = Math.ceil(totalUsers / limit);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  // const handleClickLoadMoreBtn = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  if (isError) {
    toast.error(`Something went wrong! Reload the page or try again later.`);
  }

  return (
    <div>
      {users.length !== 0 && (
        <ul className={s.tweetsCardsList}>
          {users?.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
        </ul>
      )}
      {users.length == 0 && isError && <ErrorContent />}
      {isLoading && <Loader />}
      {/* {page < totalPages && <LoadMoreButton handleClickButton={handleClickLoadMoreBtn} />} */}
    </div>
  );
};
