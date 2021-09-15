import { ReactNode, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { resetToken } from '../lib/axios'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import Router from 'next/router'

interface Props {
  children?: ReactNode
  title?: string
}

const logout = () => {
  Router.push('/')
  Cookie.remove('token')
  resetToken()
}

const Layout: React.FC<Props> = ({ children, title = 'default title' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        {/* TODO: ログイン判定要検討 */}
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-3">
          <div className="text-white">
            <Link href="/">
              <a>Uta-Kanri</a>
            </Link>
          </div>
          <div className="">
            {Cookie.get('token') ? (
              <a onClick={() => logout()} className="text-white">
                ログアウト
              </a>
            ) : (
              <Link href="/auth/sign-in">
                <a className="text-white hover:border-transparent ">ログイン</a>
              </Link>
            )}
          </div>
        </nav>
      </header>
      {children}
      <footer>
        <p className="text-center text-gray-500 text-xs">
          <Link href="https://github.com/rrih/managedby-next">
            <a>GitHub</a>
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Layout
