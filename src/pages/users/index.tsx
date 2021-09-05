import React from 'react'

// ログイン用APIを叩く

const UserIndexPage: React.FC<Props> = ({ items }: Props) => {
	return (
		<React.Fragment>
			<h1>Hello Next.js 👋</h1>
			<button>サインアップ</button>
			<button>ログイン</button>
			<button>ログアウト</button>
		</React.Fragment>
	)
}

export default UserIndexPage
