import axios from 'axios';
import { HOST } from '../common/js/config';

export function loginByPhone(phone, password) {
  const url = `${HOST}/login/cellphone?phone=${phone}&password=${password}`;
  return axios.get(url);
}
export function logout() {
  const url = `${HOST}/logout`;
  return axios.get(url);
}
