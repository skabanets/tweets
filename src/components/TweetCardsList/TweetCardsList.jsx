import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading, selectUsers } from '../../redux/users/slice';
import { TweetCard } from '../TweetCard/TweetCard';
import s from './TweetCardsList.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { ErrorContent } from '../ErrorContent/ErrorContent';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';

export const TweetCardsList = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const [isLoadingCards, setIsLoadingCards] = useState(false);

  const [page, setPage] = useState(1);
  const limit = 3;
  const totalPages = Math.ceil(users.length / limit);
  const renderedСards = page * limit;

  const handleClickLoadMoreBtn = () => {
    setIsLoadingCards(true);

    setTimeout(() => {
      setPage(prevPage => prevPage + 1);
      setIsLoadingCards(false);
    }, 500);
  };

  if (isError) {
    toast.error(`Something went wrong! Reload the page or try again later.`);
  }

  return (
    <div>
      {users.length !== 0 && (
        <ul className={s.tweetsCardsList}>
          {users?.slice(0, renderedСards).map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
        </ul>
      )}
      {users.length == 0 && isError && <ErrorContent />}
      {(isLoading || isLoadingCards) && <Loader />}
      {page < totalPages && <LoadMoreButton handleClickButton={handleClickLoadMoreBtn} />}
    </div>
  );
};
