import { configureStore } from '@reduxjs/toolkit';
import greetReducer from './greetSlice';

const store = configureStore({
  reducer: {
    greeting: greetReducer,
  },
});

export default store;
