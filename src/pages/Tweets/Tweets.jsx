import { useEffect } from 'react';
import { ButtonGoBack } from '../../components';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/users/operations';
import { TweetCardsList } from '../../components/TweetCardsList/TweetCardsList';

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
