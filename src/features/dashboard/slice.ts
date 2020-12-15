import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import asyncRequest from 'common/utils/asyncRequest';
import { method } from 'common/enums/method';
import { path } from 'features/dashboard/enums/path';
import { dashboard } from './enums/dashboard';
import { adaptBreeds } from './utils/adapters';
import { Breed } from './types';

export const fetchBreedsRequest = asyncRequest({
  method: method.fetch,
  state: dashboard.state,
  path: path.list,
});

export const fetchRandomBreedImageRequest = asyncRequest({
  method: method.fetch,
  state: dashboard.random,
  path: path.breed,
});

const breed: Breed = {
  name: '',
  image: '',
};

const slice = createSlice({
  name: dashboard.state,
  initialState: {
    breeds: [],
    breed,
  },
  reducers: {
    resetBreeds: (state) => {
      state.breeds = [];
    },
    setBreedName: (state, { payload }) => {
      state.breed.name = payload;
    },
    resetBreed: (state) => {
      state.breed = breed;
    },
  },
  extraReducers: (builder) => {
    //@ts-ignore
    builder.addCase(fetchBreedsRequest.fulfilled, (state, { payload }) => ({
      ...state,
      breeds: adaptBreeds(payload),
    }));
    builder.addCase(fetchRandomBreedImageRequest.fulfilled, (state, { payload }) => ({
      ...state,
      breed: { ...state.breed, image: payload },
    }));
  },
});

export const selectBreeds = (state: RootState) => state.dashboard.breeds;
export const selectBreed = (state: RootState) => state.dashboard.breed;

export const { resetBreeds, setBreedName, resetBreed } = slice.actions;

export default slice.reducer;
