import { catchError } from '../utils/common';
import firebase from 'firebase';
import { auth } from '../redux';

export const login = () => async (dispatch): Promise<void> => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log('result', result);

    if (!result?.credential) return;
    // let token = result.credential.accessToken;
    // document.cookie = `accessToken=${result.credential.accessToken}; `;

    dispatch(auth.setAuthInfo(result));

  } catch (err) {
    catchError(err, 'login');
  }
};