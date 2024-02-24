import { useSelector } from 'react-redux';

import { Filter, NavigateButton, TweetCardsList } from '../../components';

import { selectUsers } from '../../redux/users/slice';

const Tweets = () => {
  const users = useSelector(selectUsers);

  return (
    <div className="pageWrapper">
      <NavigateButton />
      {users.length !== 0 && <Filter />}
      <TweetCardsList />
    </div>
  );
};

export default Tweets;
