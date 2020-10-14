// import React  from 'react';
// import { Component } from './styles';
// import { Text, Button } from '../../components';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout } from '../../api/auth';
// import { RootState } from '../../redux/store';
//
// export const Auth: React.FC = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((s: RootState) => s.auth);
//
//   console.log('user', user);
//
//   return (
//     <>
//       <Component>
//         <Text>Sign in with Google for save your progress</Text>
//
//         <Button
//           onClick={() => dispatch(login())}
//         >Sign In with Google</Button>
//
//         <Button
//           onClick={() => dispatch(logout())}
//         >Sign Out</Button>
//
//       </Component>
//     </>
//   );
// };