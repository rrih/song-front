import { GetServerSideProps } from 'next'
import { findUserById } from '../../api/users'
import { User } from '../../interfaces/User'
import { useState, useEffect } from 'react'
import Cookie from 'js-cookie'
import { useAuth } from '../../utils/useAuth'
import { useUser } from '../../utils/useUser'
import { isExistsToken } from '../../lib/axios'
import { useRouter } from 'next/router'

interface Props {
  user: User
}

const ViewUser = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, isLoggedIn, authObject, login, logout } = useAuth()
  const { data } = useUser(String(id))
  // TODO: 以下直す
  // @ts-ignore
  const user: User = data?.data?.data
  // })
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>ユーザー詳細画面</h1>
          <div>
            <div>id: {user?.id}</div>
            <div>name: {user?.name}</div>
            <div>email: {user?.email}</div>
            {/* <div>password: {viewUser?.password}</div> */}
            <div>created: {user?.created}</div>
            <div>modified: {user?.modified}</div>
            <div>deleted: {user?.deleted ?? 'なし'}</div>
          </div>
        </>
      ) : (
        'ログインしてください'
      )}
    </>
  )
}

export default ViewUser
