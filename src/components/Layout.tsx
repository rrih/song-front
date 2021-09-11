import { ReactNode, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { resetToken } from '../lib/axios'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import Router from 'next/router'
import LoginPage from '../pages/users/login'

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
				{Cookie.get('token') ? (
					<button onClick={() => logout()}>ログアウトボタン</button>
				) : (
					<a href="/users/login">ログイン</a>
				)}
			</header>
			{children}
			<footer>
				<Link href="https://github.com/rrih/managedby-next">
					<a>github</a>
				</Link>
			</footer>
		</div>
	)
}

export default Layout
