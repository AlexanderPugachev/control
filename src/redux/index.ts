import type { ThunkAction } from 'redux-thunk';
import type { Action } from 'redux';
import type { RootState } from './store';

export { actions as accounts } from './slices/accountsSlice';
export { actionsActions } from './slices/actionsSlice';
export { commonActions } from './slices/commonSlice';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
