import { useEffect, useState } from 'react';
import { ButtonGoBack } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotalUsers, fetchUsers } from '../../redux/users/operations';
import { TweetCardsList } from '../../components/TweetCardsList/TweetCardsList';
import { selectTotalUsers, selectUsers, setInitialValue } from '../../redux/users/slice';
import { LoadMoreButton } from '../../components/LoadMoreButton/LoadMoreButton';

const Tweets = () => {
  const [page, setPage] = useState(1);
  const limit = 3;
  const totalUsers = useSelector(selectTotalUsers);
  const totalPages = Math.ceil(totalUsers / limit);
  const tweets = useSelector(selectUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialValue());
    dispatch(fetchTotalUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page, dispatch]);

  const handleClickLoadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="pageWrapper">
      <ButtonGoBack />
      <TweetCardsList tweets={tweets} />
      {page < totalPages && <LoadMoreButton handleClickButton={handleClickLoadMoreBtn} />}
    </div>
  );
};

export default Tweets;
