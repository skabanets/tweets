import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading, selectUsers } from '../../redux/users/slice';
import { TweetCard } from '../TweetCard/TweetCard';
import s from './TweetCardsList.module.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { ErrorContent } from '../ErrorContent/ErrorContent';
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';
import { changeFilter, selectFilter } from '../../redux/filter/slice';
import { getFilteredArray } from '../../helpers/getFilteredArray';
import { fetchUsers } from '../../redux/users/operations';

export const TweetCardsList = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const [isChangeFilter, setIsChangeFilter] = useState(false);

  const [page, setPage] = useState(null);
  const limit = 3;
  const renderedСards = page * limit;

  useEffect(() => {
    setPage(1);
    dispatch(fetchUsers());
    dispatch(changeFilter('show all'));
  }, [dispatch]);

  useEffect(() => {
    setIsChangeFilter(true);

    setTimeout(() => {
      setPage(1);
      setIsChangeFilter(false);
    }, 500);
  }, [filter]);

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

  const filteredCards = getFilteredArray(users, filter);
  const totalPages = Math.ceil(filteredCards.length / limit);

  if (isChangeFilter) return <Loader />;

  return (
    <div>
      {filteredCards.length !== 0 && (
        <h2 className={s.listTitle}>
          Total tweets {filter !== 'show all' ? filter : ''} : {filteredCards.length}
        </h2>
      )}
      {filteredCards.length !== 0 && (
        <ul className={s.tweetsCardsList}>
          {filteredCards?.slice(0, renderedСards).map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
        </ul>
      )}
      {filteredCards.length === 0 && filter !== 'show all' && users.length !== 0 && (
        <div className={s.boxWrapper}>
          <h2 className="title">No results matched filter</h2>
        </div>
      )}
      {users.length === 0 && isError && <ErrorContent />}
      {(isLoading || isLoadingCards) && <Loader />}
      {page < totalPages && <LoadMoreButton handleClickButton={handleClickLoadMoreBtn} />}
    </div>
  );
};
