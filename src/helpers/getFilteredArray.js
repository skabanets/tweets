export const getFilteredArray = (array, filter) => {
  switch (filter) {
    case 'follow':
      return array.filter(item => !item.isSubscription);
    case 'followings':
      return array.filter(item => item.isSubscription);
    default:
      return array;
  }
};
