import {
  Accounts,
  Auth,
  Transactions
} from '../pages';

const transactionsRoute = {
  exact: true,
  key: 'transactions',
  path: '/transactions',
  component: Transactions
};

const accountsRoute = {
  exact: true,
  key: 'accounts',
  path: '/accounts',
  component: Accounts
};

const authRoute = {
  exact: true,
  key: 'auth',
  path: '/auth',
  component: Auth
};

export const header = [
  transactionsRoute,
  accountsRoute
];

export const routes = [
  ...header,
  authRoute
];

