import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import Cookie from 'js-cookie'
import { findLoginUser } from "../../api/auth";
import * as axiosUtil from '../../lib/axios'

const MyPageIndex = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const token = Cookie.get('token')
  useEffect(() => {
    const cookie = Cookie.get('token')
    if (cookie != null) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
    axiosUtil.setToken(token)
    axiosUtil.instance.get('/api/v1/mypage/').then((res) => {
    }).catch((err) => {
      console.error(err.response)
    })
  }, [])

  const mypage = () => {
    if (isOpen) {
      return <>This is Mypage</>
    } else {
      return <>This is no Cookie</>
    }
  }

  return <>{mypage()}</>
}

export default MyPageIndex