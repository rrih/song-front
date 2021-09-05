import urljoin from 'url-join'
import { User } from '../interfaces/User'
import * as axiosUtil from '../lib/axios'

/**
 * id を引数にサーバーサイドから渡ってくる users を返す
 *
 * @param string id
 * @return 
 */
export const findUserById = async (id: string) => {
    // TODO: api 仕様書について知っておくべき箇所検討中
    const url = urljoin('/api/v1/users/view/', id)
    // TODO: axiosUtil.instance.get という呼び出し妥当か要検討
    const { data } = await axiosUtil.instance.get(url)
    return data;
}