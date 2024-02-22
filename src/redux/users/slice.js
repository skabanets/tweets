import { createSlice } from '@reduxjs/toolkit';
import { editSubscription, fetchTotalUsers, fetchUsers } from './operations';

const initialState = {
  users: [],
  totalUsers: null,
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setInitialValue() {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = [...state.users, ...payload];
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(editSubscription.fulfilled, (state, { payload }) => {
        const user = state.users.find(user => user.id === payload.id);
        user.isSubscription = payload.isSubscription;
        user.followers = payload.followers;
      })
      .addCase(fetchTotalUsers.fulfilled, (state, { payload }) => {
        state.totalUsers = payload;
      });
  },
  selectors: {
    selectUsers: state => state.users,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.isError,
    selectTotalUsers: state => state.totalUsers,
  },
});

export const usersReducer = slice.reducer;
export const { selectUsers, selectIsLoading, selectIsError, selectTotalUsers } = slice.selectors;
export const { setInitialValue } = slice.actions;
