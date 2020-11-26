import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import { reducer as accounts } from './accountsSlice';
import { reducer as transactions } from './transactionsSlice';
import { reducer as auth } from './authSlice';

const rootReducer = combineReducers({
  accounts,
  transactions,
  auth,
});

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
  // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
