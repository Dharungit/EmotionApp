import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMoodOptionWithTimestamp} from '../../types/';

const initialState: IMoodOptionWithTimestamp[] = [];

export const emotionSlice = createSlice({
  name: 'emotions',
  initialState,
  reducers: {
    addEmotion: (state, action: PayloadAction<IMoodOptionWithTimestamp>) => {
      return [...state, action.payload];
    },
  },
});

export const {addEmotion} = emotionSlice.actions;

export const emotionReducer = emotionSlice.reducer;
