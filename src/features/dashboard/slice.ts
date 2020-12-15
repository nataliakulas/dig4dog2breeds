import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import asyncRequest from 'common/utils/asyncRequest';
import { dashboard } from './enums/dashboard';
import { adaptBreeds } from './utils/adapters';

export const fetchBreedsRequest = asyncRequest({
  method: 'fetch',
  state: dashboard.state,
  path: 'https://dog.ceo/api/breeds/list/all',
});

const slice = createSlice({
  name: dashboard.state,
  initialState: {
    breeds: [],
  },
  reducers: {
    resetBreeds: (state) => {
      state.breeds = [];
    },
  },
  extraReducers: (builder) => {
    //@ts-ignore
    builder.addCase(fetchBreedsRequest.fulfilled, (state, { payload }) => ({
      breeds: adaptBreeds(payload),
    }));
  },
});

export const selectBreeds = (state: RootState) => state.dashboard.breeds;

export const { resetBreeds } = slice.actions;

export default slice.reducer;
