import axios from 'axios'
import throwMessage from './throwMessage'

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  throwMessage('error', 'An occured error')
  return Promise.reject(error);
});

export default axios