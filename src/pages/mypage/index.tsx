import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import Cookie from 'js-cookie'
import { findLoginUser } from "../../api/auth";
import * as axiosUtil from '../../lib/axios'

const MyPageIndex = ({ user }) => {
  // const [data, setData] = await findLoginUser(Cookie.get('token'))
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzE3MjU0MzEsInVzZXIiOiJ0ZXN0QGdtYWlsLmNvbSJ9.5xW9uiMi9SE9aZxvhTyHNGNQBr3BUDubGSTOVtMAhA8"
  const [data, setData] = useState(null)
  useEffect(() => {
    axiosUtil.setToken(token)
    console.log(Cookie.get('token'))
    axiosUtil.instance.get('/api/v1/mypage/').then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  // axiosUtil.
  // console.log(data)
  // const { data } = user
  // console.log(Cookie.get('token'))
  // console.log(data)
  return <>MyPage</>
}

/**
 * /users/:id にアクセスした時にサーバーサイドで実行される
 * /users/1 にアクセスした時に { id: '1' } が引数 params に渡される
 *
 * @param params { id: '1' }
 * @return { props: { user } }
 */
// export const getServerSideProps: GetServerSideProps = async ({}) => {
//   // console.log(Cookie.get('token'))
//   // ログインユーザー情報を受け取る
//   // /api/v1/mypage/ を叩いた結果
//   // console.log(Cookie.get('token'))
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzE3MjU0MzEsInVzZXIiOiJ0ZXN0QGdtYWlsLmNvbSJ9.5xW9uiMi9SE9aZxvhTyHNGNQBr3BUDubGSTOVtMAhA8"
//   const user = await findLoginUser(token)
//   return {
//     props: {
//       user,
//     }
//   }
// }

export default MyPageIndex