import { GetServerSideProps } from 'next'
import { findUserById } from '../../api/users'
import { User } from '../../interfaces/User'
import { useState } from 'react'
import Cookie from 'js-cookie'
// import Layout from "../../components/Layout";

interface Props {
  user: User
}

const ViewUser = ({ user }): JSX.Element => {
  // TODO: 認証挟む
  // const [isLogin, setIsLogin] = useState(!!Cookie.get('token'))
  // console.log(Cookie.get('token'))
  const { data } = user
  const [viewUser, setViewUser] = useState<User>(data)
  return (
    <>
      {Cookie.get('token') ? (
        <>
          <h1>ユーザー詳細画面</h1>
          <div>
            <div>id: {viewUser?.ID}</div>
            <div>name: {viewUser?.Name}</div>
            <div>email: {viewUser?.Email}</div>
            <div>password: {viewUser?.Password}</div>
            <div>created: {viewUser?.Created}</div>
            <div>modified: {viewUser?.Modified}</div>
            <div>deleted: {viewUser?.Deleted ?? 'なし'}</div>
          </div>
        </>
      ) : (
        'ログインしてください'
      )}
    </>
  )
}

/**
 * /users/:id にアクセスした時にサーバーサイドで実行される
 * /users/1 にアクセスした時に { id: '1' } が引数 params に渡される
 *
 * @param params { id: '1' }
 * @return { props: { user } }
 */
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // {data: {users}}を受け取る
  const user = await findUserById(params?.id as string)
  return { props: { user } }
}

export default ViewUser
