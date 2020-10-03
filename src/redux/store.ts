import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { reducer as accounts } from './accountsSlice';
import { reducer as transactions } from './transactionsSlice';
import { reducer as auth } from './authSlice';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
});

export const store = configureStore({
  reducer: {
    accounts,
    transactions,
    auth
  },
  middleware,
  devTools: true
  // devTools: process.env.NODE_ENV !== 'production',
});