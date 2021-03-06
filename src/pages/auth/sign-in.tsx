import { useState, useEffect } from 'react'
import urljoin from 'url-join'
import Cookie from 'js-cookie'
import * as axiosUtil from '../../lib/axios'
import { AxiosResponse } from 'axios'
import Router from 'next/router'

interface LoginForm {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' })
  const [loginErrorMessage, setLoginErrorMessage] = useState<string>('')
  // const router = useRouter()

  useEffect(() => {
    handleInputChange
  }, [loginErrorMessage])

  /**
   * 入力値を逐次セットする
   * TODO: バリデーションを追加する
   * @param e React.ChangeEvent<any>
   */
  const handleInputChange = (e: React.ChangeEvent<any>) => {
    e.persist()
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  /**
   * TODO: 多分こいつはUI層におかない方がいい
   * ログインボタンを押したに発火するイベント
   * @param e any
   */
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // 以下、ログイン状態に入る時の処理
    if (!axiosUtil.isExistsToken()) {
      const token = Cookie.get('token')
      if (token != null) {
        axiosUtil.setToken(token)
      }
    }
    try {
      const res = await login(loginForm)
      // TODO: あとで以下きちんと型付けする
      // @ts-ignore
      const token: string = res?.data?.data?.token
      Cookie.set('token', token) // cookieをセット
      Router.push('/')
    } catch (e) {
      setLoginErrorMessage(e.message)
    }
  }

  /**
   * ログイン処理
   * ログイン成功 -> token が返ってくる
   * ログイン失敗 -> void
   * @param loginForm LoginForm ログイン時に入力した情報
   * @return Promise<AxiosResponse<any>>　エラーの場合空、ログイン成功の場合トークン入りのデータが返される
   */
  const login = async (loginForm: LoginForm) => {
    const url = urljoin('/api/v1/auth/login/')
    const res = await axiosUtil.instance
      .post(url, loginForm)
      .then((res: AxiosResponse<any>) => {
        // ログイン処理成功時
        setLoginErrorMessage('')
        return res
      })
      .catch((err) => {
        // TODO: エラーメッセージの分岐をswitch文で書き直す
        if (err.response.status === 401) {
          throw new Error('メールアドレスまたはパスワードどちらか正しくないです')
        }
      })
    return res
  }

  // view
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            メールアドレス
          </label>
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
          <label htmlFor="password">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={loginForm.password}
            placeholder="********"
          />
        </div>
        <div>
          <button
            type="submit"
          >
            ログイン
          </button>
        </div>
        <p>{loginErrorMessage}</p>
      </form>
    </div>
  )
}

export default LoginPage
