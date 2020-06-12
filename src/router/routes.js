import { routes as auth } from '../modules/auth';
import { routes as dashboard } from '../pages/dashboard';
import { routes as profile } from '../pages/profile';

export default [
  ...auth,
  ...dashboard,
  ...profile,
];
