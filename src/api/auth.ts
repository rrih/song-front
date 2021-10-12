import urljoin from 'url-join'
import { User } from '../interfaces/User'
import * as axiosUtil from '../lib/axios'

/**
 * get /api/v1/mypage/
 */
export const findLoginUser = async (token) => {
    const url: string = '/api/v1/mypage/'
    // const url = urljoin('/api/v1/users/view/', id)
    const { data } = await axiosUtil.instance.get(url, {
        headers: {
            Authorization: token
        }
    })
    return data
}