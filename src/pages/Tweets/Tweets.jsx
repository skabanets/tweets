import { ButtonGoBack } from '../../components';
import { TweetCardsList } from '../../components/TweetCardsList/TweetCardsList';

const Tweets = () => {
  return (
    <div className="pageWrapper">
      <ButtonGoBack />
      <TweetCardsList />
    </div>
  );
};

export default Tweets;
