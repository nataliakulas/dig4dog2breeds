import { createAsyncThunk } from '@reduxjs/toolkit';

const asyncRequest = ({ method, state, path }: { method: string; state: string; path: string }) =>
  createAsyncThunk(`${state}/${method}`, async (values, { rejectWithValue }) => {
    const response = await fetch(path).then((response) => response.json());

    if (response.status === 'success') {
      return response.message;
    }
    return rejectWithValue(response.message);
  });

export default asyncRequest;
