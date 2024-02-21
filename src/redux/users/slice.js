import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const initialState = {
  users: [],
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
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
