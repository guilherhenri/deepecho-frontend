import * as types from './mutation-types';
import * as storage from '../storage';
import services from '../../../http';

export const ActionLogin = async ({ dispatch }, payload) => {
  const response = await services.auth.login();

  const userExists = response.data.body.users.findIndex(user => (
    user.username === payload.username
  ));

  if (userExists >= 0) {
    const user = response.data.body.users[userExists];
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikd1aWxoZXJtZSBIZW5yaXF1ZSIsImlhdCI6MTUxNjIzOTAyMn0.bl0qzVDPsbX5-tZ9lrBzA8FraebkRbeHYb7JKcMZF5Y';

    dispatch('ActionSetToken', token);
    dispatch('ActionSetUser', user);
    return true;
  }
  throw new Error();
};

export const ActionCheckSession = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token);
  }

  const token = storage.getLocalToken();

  if (!token) {
    return Promise.reject(new Error('Token invalido'));
  }

  dispatch('ActionSetToken', token);

  if (state.user) {
    return Promise.resolve(state.user);
  }

  const user = storage.getLocalUser();

  if (!user) {
    return Promise.reject(new Error('User invalido'));
  }

  return dispatch('ActionSetUser', user);
};

export const ActionSetUser = ({ commit }, payload) => {
  storage.setLocalUser(payload);
  commit(types.SET_USER, payload);
};

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload);
  storage.setHeaderToken(payload);
  commit(types.SET_TOKEN, payload);
};

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken('');
  storage.deleteLocalToken();
  storage.deleteLocalUser();
  dispatch('ActionSetUser', {});
  dispatch('ActionSetToken', '');
};
