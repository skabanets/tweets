import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../../redux/users/slice';
import { Loader } from '../Loader/Loader';
import { TweetCard } from '../TweetCard/TweetCard';
import s from './TweetCardsList.module.css';
import { toast } from 'react-toastify';

export const TweetCardsList = ({ tweets }) => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    toast.error('Something went wrong! Reload page or try again later.');
  }

  return (
    <div>
      <ul className={s.tweetsCardsList}>
        {tweets.length !== 0 &&
          tweets.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
      </ul>
    </div>
  );
};
