import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const tweetsApi = axios.create({
  baseURL: 'https://65d5a1f9f6967ba8e3bc0e8d.mockapi.io/tweets',
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
  try {
    const { data } = await tweetsApi.get('/users');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editSubscription = createAsyncThunk('users/updateUser', async (body, thunkAPI) => {
  try {
    await tweetsApi.put(`/users/${body.id}`, {
      ...body,
    });
    return body;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
