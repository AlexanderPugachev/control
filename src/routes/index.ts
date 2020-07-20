import Transactions from '../pages/Transactions/Transactions';
import Accounts from '../pages/Accounts/Accounts';

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

export const header = [
  transactionsRoute,
  accountsRoute
];

export const routes = [
  ...header
];

