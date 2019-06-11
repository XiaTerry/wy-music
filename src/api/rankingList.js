import axios from 'axios';
import { HOST } from '../common/js/config';

export function getRankingtList(id) {
  const url = `${HOST}/top/list?idx=${id}`;
  return axios.get(url);
}
export function getRankDetail() {
  const url = `${HOST}/toplist/detail`;
  return axios.get(url);
}
