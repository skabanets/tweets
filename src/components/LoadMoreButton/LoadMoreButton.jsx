import s from './LoadMoreButton.module.css';

export const LoadMoreButton = ({ handleClickButton }) => {
  return (
    <button type="button" onClick={handleClickButton} className={s.loadMoreBtn}>
      Load more
    </button>
  );
};
