import { useDispatch } from 'react-redux';
import { ButtonGoBack, Filter, TweetCardsList } from '../../components';
import { useEffect } from 'react';
import { fetchUsers } from '../../redux/users/operations';

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="pageWrapper">
      <ButtonGoBack />
      <Filter />
      <TweetCardsList />
    </div>
  );
};

export default Tweets;
