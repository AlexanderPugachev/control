import React  from 'react';
import { Component } from './styles';
import { Text, Button } from '../../components';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../api/auth';

export const Auth: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Component>
        <Text>Sign in with Google for save your progress</Text>

        <Button
          onClick={() => dispatch(login())}
        >Sign In with Google</Button>

        <Button
          onClick={() => dispatch(logout())}
        >Sign Out</Button>

      </Component>
    </>
  );
};