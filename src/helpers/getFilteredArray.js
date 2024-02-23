export const getFilteredArray = (array, filter) => {
  switch (filter) {
    case 'follow':
      return array.filter(item => item.isSubscription === true);
    case 'followings':
      return array.filter(item => item.isSubscription === false);
    default:
      return array;
  }
};
