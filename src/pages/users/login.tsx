import { useState } from "react"
import urljoin from "url-join";
import * as axiosUtil from '../../lib/axios'

interface LoginForm {
	email: string
	password: string
}

const LoginPage: React.FC = () => {
	const [loginForm, setLoginForm] = useState<LoginForm>({email: "", password: ""});
	const [error, setError] = useState<string>("")

	/**
	 * 入力値を逐次セットする
	 * TODO: バリデーションを追加する
	 * @param e React.ChangeEvent<any>
	 */
	const handleInputChange = (e: React.ChangeEvent<any>) => {
		e.persist()
		setLoginForm({
			...loginForm,
			[e.target.name]: e.target.value,
		})
	}
	
	/**
	 * TODO: 多分こいつはUI層におかない方がいい
	 * ログイン結果を待ち受けるイベント
	 * @param e any
	 */
	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const res = await login(loginForm)
		if (res) {
			setError(res)
		}
	}

	/**
	 * ログイン処理
	 * ログイン成功 -> token が返ってくる
	 * ログイン失敗 -> void
	 * @param loginForm ログイン時に入力した情報
	 */
	const login = async (loginForm: LoginForm) => {
		const url = urljoin('/api/v1/users/signin/')
		const res = await axiosUtil
			.instance
			.post(url, loginForm)
			.then((res) => console.log(res))
			.catch((err) => {
				console.log("えらーーー")
				console.log(err)
			})
			.finally(() => console.log("さいご"))
		console.log(res)
		// TODO: api 仕様書について知っておくべき箇所検討中
		// const url = urljoin('/api/v1/users/view/', id)
		// TODO: axiosUtil.instance.get という呼び出し妥当か要検討
		// const { data } = await axiosUtil.instance.get(url)
		// return data;
	}
	return (
		<>
			<h1>ログイン</h1>
			メールアドレスとパスワードを入力してください
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">email</label>
					<input
						type="email"
						id="email"
						name="email"
						onChange={handleInputChange}
						value={loginForm.email}
						placeholder="roi@roiroi.dev"
					/>
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input
						type="password"
						id="password"
						name="password"
						onChange={handleInputChange}
						value={loginForm.password}
						placeholder="********"
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</>
	)
}

export default LoginPage