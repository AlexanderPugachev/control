import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { accounts } from './accountsSlice';
import { transactions } from './transactionsSlice';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
});

export const store = configureStore({
  reducer: {
    accounts,
    transactions,
  },
  middleware,
  devTools: true
  // devTools: process.env.NODE_ENV !== 'production',
});