import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { editSubscription, fetchUsers } from './operations';

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(editSubscription.fulfilled, (state, { payload }) => {
        const user = state.users.find(user => user.id === payload.id);
        user.isSubscription = payload.isSubscription;
        user.followers = payload.followers;
        state.isLoading = false;
        state.isError = false;
      })
      .addMatcher(isAnyOf(fetchUsers.pending, editSubscription.pending), state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(isAnyOf(fetchUsers.rejected, editSubscription.rejected), state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
  selectors: {
    selectUsers: state => state.users,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.isError,
  },
});

export const usersReducer = slice.reducer;
export const { selectUsers, selectIsLoading, selectIsError } = slice.selectors;
