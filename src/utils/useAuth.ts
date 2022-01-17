import { isExistsToken, setToken, resetToken } from "../lib/axios";
import Cookie from 'js-cookie'
import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import { getAuthObject } from "../api/auth";
import { login as postLogin } from "../api/auth";

/**
 * Cookieにあるtokenをセットする
 */
export const initLogin = async () => {
  if (!isExistsToken()) {
    const token = Cookie.get('token')
    if (token !== undefined) {
      setToken(token)
      await mutate('authObject')
    }
  }
}

export const useAuth = () => {
  initLogin();
  const router = useRouter();
  const { data, mutate, error } = useSWR('authObject', getAuthObject, { shouldRetryOnError: false });

  const isLoading = !data && !error;
  const isLoggedIn = !error && data;

  const login = async(loginId: string, password: string) => {
    try {
      const { token } = await postLogin(loginId, password);
      await initLogin();
      router.push(router.query?.callbackPath as string ?? '/mypage');
    }
    catch (e) {
      if (e.response.status === 401) {
        throw new Error('ユーザ名/メールアドレス もしくは パスワードが間違っています');
      }
    }
  };
  const logout = async () => {
    await router.push('/');
    Cookie.remove('token');
    resetToken();
    await mutate();
  };

  return {
    isLoading,
    isLoggedIn,
    authObject: data,
    mutate,
    login,
    logout,
  };
};