import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'common/enums/api';

const asyncRequest = ({ method, state, path }: { method: string; state: string; path: string }) =>
  createAsyncThunk(`${state}/${method}`, async (values: string | void, { rejectWithValue }) => {
    const response = await fetch(api.path + path + (values || '')).then((response) => response.json());

    if (response.status === 'success') {
      return response.message;
    }
    return rejectWithValue(response.message);
  });

export default asyncRequest;
