import { ReactNode, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { resetToken } from '../lib/axios'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { appName } from '../utils/appName'
import { useAuth } from '../utils/useAuth'
// useAuth をインポート

interface Props {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'default title' }: Props) => {
  const { isLoading, isLoggedIn, login, logout } = useAuth()
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <div>
            <Link href="/">
            <a>{appName}</a>
            </Link>
          </div>
          <div className="sso-layout-header-login-logout">
            {isLoggedIn ? (
              <a onClick={() => logout()}>
                ログアウト
              </a>
            ) : (
              <Link href="/auth/sign-in">
                <a>ログイン</a>
              </Link>
            )}
          </div>
        </nav>
      </header>
      {children}
      <footer className="sso-layout-footer">
        <p>
            <div>&copy; {appName} {new Date().getFullYear()}</div>
          <div>
            <Link href="https://github.com/rrih/songscoreonline-next">
              <a>GitHub</a>
            </Link>
          </div>
        </p>
      </footer>
    </div>
  )
}

export default Layout
