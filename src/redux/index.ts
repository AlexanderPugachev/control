import type { ThunkAction } from 'redux-thunk';
import type { Action } from 'redux';
import type { RootState } from './store';

export { actions as accounts } from './accountsSlice';
export { actionsActions } from './actionsSlice';
export { actions as auth } from './authSlice';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
