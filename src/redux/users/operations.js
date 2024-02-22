import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const tweetsApi = axios.create({
  baseURL: 'https://65d5a1f9f6967ba8e3bc0e8d.mockapi.io/tweets',
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page, thunkAPI) => {
  try {
    const params = page
      ? {
          page,
          limit: 3,
        }
      : '';

    const { data } = await tweetsApi.get('/users', { params });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchTotalUsers = createAsyncThunk('users/fetchtTotalUsers', async (_, thunkAPI) => {
  try {
    const { data } = await tweetsApi.get('/users');
    return data.length;
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
