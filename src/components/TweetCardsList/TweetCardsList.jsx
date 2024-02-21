import { useSelector } from 'react-redux';
import { selectIsError, selectIsLoading, selectUsers } from '../../redux/users/slice';
import { Loader } from '../Loader/Loader';
import { TweetCard } from '../TweetCard/TweetCard';
import s from './TweetCardsList.module.css';
import { toast } from 'react-toastify';

export const TweetCardsList = () => {
  const users = useSelector(selectUsers);
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
        {users.length !== 0 &&
          users.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
      </ul>
    </div>
  );
};
