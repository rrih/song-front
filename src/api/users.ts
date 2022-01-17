import urljoin from 'url-join'
import { User } from '../interfaces/User'
import * as axiosUtil from '../lib/axios'
import Cookie from 'js-cookie'

/**
 * id を引数にサーバーサイドから渡ってくる users を返す
 *
 * @param string id
 * @return
 */
export const findUserById = async (id: string) => {
  const url = urljoin('/api/v1/users/view/', id)
  const { data } = await axiosUtil.instance.get<User>(url)
  return data
}

// export const updateLatestLoginAt = async () => {
//   const url = urljoin('/api/v1/')
// }