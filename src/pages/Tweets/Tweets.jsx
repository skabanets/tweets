import { useDispatch } from 'react-redux';
import { ButtonGoBack } from '../../components';
import { TweetCardsList } from '../../components/TweetCardsList/TweetCardsList';
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
      <TweetCardsList />
    </div>
  );
};

export default Tweets;
