import Vue from 'vue';
import VueResource from 'vue-resource';

import services from './services';

Vue.use(VueResource);

const { http } = Vue;

http.options.root = 'http://198.211.97.79:3000/database/';

Object.keys(services).map((service) => {
  services[service] = Vue.resource('', {}, services[service]);
});

const setBearerToken = (token) => {
  http.headers.common.Authorization = `Bearer ${token}`;
};

export { http, setBearerToken };
export default services;
