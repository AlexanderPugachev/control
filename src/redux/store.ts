import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import { reducer as accounts } from './slices/accountsSlice';
import actions from './slices/actionsSlice';
import { reducer as auth } from './slices/authSlice';
import common from './slices/commonSlice';

const rootReducer = combineReducers({
  accounts,
  actions,
  auth,
  common
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
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
