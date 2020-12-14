import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const fetchBreedsRequest = createAsyncThunk('', async (values, { rejectWithValue }) => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all').then((response) => response.json());

  if (response.status === 'success') {
    return response.message;
  }
  return rejectWithValue(response.message);
});

const slice = createSlice({
  name: 'dashboard',
  initialState: {
    breeds: {},
  },
  reducers: {
    resetBreeds: (state) => {
      state.breeds = {};
    },
  },
  extraReducers: (builder) => {
    //@ts-ignore
    builder.addCase(fetchBreedsRequest.fulfilled, (state, { payload }) => ({
      breeds: payload,
    }));
  },
});

export const { resetBreeds } = slice.actions;

export default slice.reducer;
