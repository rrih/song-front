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
        <nav>
          <div>
            <Link href="/">
              <a>Song-Score-Online</a>
            </Link>
          </div>
          <div className="">
            {Cookie.get('token') ? (
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
      <footer>
        <p>
          <div>&copy; Song-Score-Online {new Date().getFullYear()}</div>
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
