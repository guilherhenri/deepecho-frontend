import { routes as auth } from '../modules/auth';
import { routes as dashboard } from '../pages/dashboard';

export default [
  ...auth,
  ...dashboard,
];
