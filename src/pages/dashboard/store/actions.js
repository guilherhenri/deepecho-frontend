import * as types from './mutation-types';
import services from '../../../http';

export const ActionInbox = async ({ commit }) => {
  const response = await services.dashboard.emails();

  commit(types.SET_INBOX, response.data.body.emails);
};
