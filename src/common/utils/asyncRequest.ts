import { createAsyncThunk } from '@reduxjs/toolkit';

const asyncRequest = ({ method, state, path }: { method: string; state: string; path: string }) =>
  createAsyncThunk(`${state}/${method}`, async (values: string, { rejectWithValue }) => {
    const response = await fetch(path + (values || '')).then((response) => response.json());

    if (response.status === 'success') {
      return response.message;
    }
    return rejectWithValue(response.message);
  });

export default asyncRequest;
