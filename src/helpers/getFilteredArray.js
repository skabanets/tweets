export const getFilteredArray = (array, filter) => {
  switch (filter) {
    case 'follow':
      return array.filter(item => item.isSubscription === false);
    case 'followings':
      return array.filter(item => item.isSubscription === true);
    default:
      return array;
  }
};
