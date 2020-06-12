import * as types from './mutation-types';

export default {
  [types.SET_INBOX](state, payload) {
    state.inbox = payload;
  },
};
