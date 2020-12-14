import { createSlice } from '@reduxjs/toolkit';
import asyncRequest from 'common/utils/asyncRequest';
import { dashboard } from './enums/dashboard';

export const fetchBreedsRequest = asyncRequest({
  method: 'fetch',
  state: dashboard.state,
  path: 'https://dog.ceo/api/breeds/list/all',
});

const slice = createSlice({
  name: dashboard.state,
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
