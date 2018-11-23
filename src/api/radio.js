import axios from 'axios'
import {HOST} from '../common/js/config'
export function getBanner () {
    const url = HOST + '/banner'
        return axios.get(url)
}
export function getDjprogram () {
    const url = HOST + '/dj/recommend'
    return axios.get(url)
}
export function getDjCateList () {
    const url = HOST + '/dj/catelist'
    return axios.get(url)
}