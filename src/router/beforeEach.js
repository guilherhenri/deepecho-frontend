import store from '../store';

export default async (to, from, next) => {
  document.title = 'DeepEcho';

  if (to.name !== 'login' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/ActionCheckToken');

      // check user
      next({ path: to.path });
    } catch (err) {
      next({ name: 'login' });
    }
  } else {
    if (to.name === 'login' && store.getters['auth/hasToken']) {
      next({ name: 'dashboard' });
    } else {
      next();
    }
  }
};