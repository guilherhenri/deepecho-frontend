import * as types from './mutation-types';
import * as storage from '../storage';
import services from '../../../http';

export const ActionLogin = async ({ dispatch }, payload) => {
  const response = await services.auth.login(payload);

  dispatch('ActionSetUser', response.data.user);
  dispatch('ActionSetToken', response.data.token);
};

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token);
  }

  const token = storage.getLocalToken();

  if (!token) {
    return Promise.reject(new Error('Token invalido'));
  }

  dispatch('ActionSetToken', token);
  return dispatch('ActionLoadSession');
};

// Trocar isso por salvar o usuario

export const ActionLoadSession = ({ dispatch }) => new Promise(async (resolve, reject) => {
  try {
    const { data: { user } } = await services.auth.loadSession();

    dispatch('ActionSetUser', user);

    resolve();
  } catch (err) {
    dispatch('ActionSignOut');
    reject(err);
  }
});

export const ActionSetUser = ({ commit }, payload) => {
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
  dispatch('ActionSetUser', {});
  dispatch('ActionSetToken', '');
};
