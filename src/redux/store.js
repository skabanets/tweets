import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});
