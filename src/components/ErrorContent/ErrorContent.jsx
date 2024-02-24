import s from './ErrorContent.module.css';
import errorImage1x from '../../assets/images/error-image@1x.webp';
import errorImage2x from '../../assets/images/error-image@2x.webp';

export const ErrorContent = () => {
  return (
    <img
      srcSet={`${errorImage1x} 1x, ${errorImage2x} 2x`}
      src={errorImage1x}
      alt="error image"
      className={s.errorImage}
    />
  );
};
