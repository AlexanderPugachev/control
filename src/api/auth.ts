// import { catchError } from '../utils/common';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { AppThunk, auth } from '../redux';
//
// export const login = (): AppThunk => async dispatch => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   try {
//     const result = await firebase.auth().signInWithPopup(provider);
//     console.log('result in', result);
//
//     if (!result?.credential) return;
//     const { accessToken } = result.credential as firebase.auth.OAuthCredential;
//     document.cookie = `accessToken=${accessToken}`;
//
//     const res = await firebase.auth().updateCurrentUser(result.user);
//     console.log('res update', res);
//
//     dispatch(auth.setAuthInfo(result));
//
//   } catch (err) {
//     catchError(err, 'login');
//   }
// };
//
// export const logout = (): AppThunk => async dispatch => {
//   try {
//     await firebase.auth().signOut();
//
//     document.cookie = 'accessToken=;max-age=-1';
//     dispatch(auth.clearAuthInfo());
//
//   } catch (err) {
//     catchError(err, 'logout');
//   }
// };
//
// export const currentUser = (): AppThunk => async dispatch => {
//   try {
//     const data = await firebase.auth().currentUser;
//
//     console.log('data', data);
//
//     dispatch(auth.setCurrentUser(data));
//
//   } catch (err) {
//     catchError(err, 'currentUser');
//   }
// };