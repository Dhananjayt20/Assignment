import axios from 'axios';
import { getBaseUrl } from './helpers';

export const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const instance = axios.create();

instance.interceptors.request.use(
  async config => {
    config.baseURL = await getBaseUrl();
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

function fetchResponse(config) {
  console.log('config', config);
  return instance(config)
    .then(response => {
      const { data } = response;
      console.log('Response', data);
      return { success: true, data };
    })
    .catch(error => {
      console.log('error', error, error.response);
      if (error.response.status === 403) {
        return { data: {}, success: false, error: {} };
      }
      if (!error.response) {
        return {
          data: {},
          success: false,
          error: { title: 'Error', message: 'Check your Internet' },
        };
      }
      const { data } = error.response || {};
      return {
        success: false,
        data,
        error: {
          title: 'Error',
          message: 'Some error occurred. Please try again',
        },
      };
    });
}

export const api = async config => fetchResponse({ ...config });
