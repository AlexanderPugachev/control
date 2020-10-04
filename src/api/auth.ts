import { catchError } from '../utils/common';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AppThunk, auth } from '../redux';

export const login = (): AppThunk => async dispatch => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log('result in', result);

    if (!result?.credential) return;
    const { accessToken } = result.credential;
    // document.cookie = `accessToken=${result.credential.accessToken}; `;

    dispatch(auth.setAuthInfo(result));

  } catch (err) {
    catchError(err, 'login');
  }
};

export const logout = (): AppThunk => async () => {
  try {
    const result = await firebase.auth().signOut();

    console.log('result out', result);

  } catch (err) {
    catchError(err, 'login');
  }
};