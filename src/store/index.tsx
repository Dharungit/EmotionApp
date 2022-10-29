import {configureStore} from '@reduxjs/toolkit';
import {emotionReducer} from './slice/emotionSlice';

export const store = configureStore({
  reducer: {
    emotion: emotionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
