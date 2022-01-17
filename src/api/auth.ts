import urljoin from 'url-join'
import { User } from '../interfaces/User'
import * as axiosUtil from '../lib/axios'
import AuthObject from "../interfaces/Auth";
import { AxiosRequestConfig } from 'axios';

/**
 * get /api/v1/mypage/
 */
export const findLoginUser = async (token: string) => {
    const url: string = '/api/v1/mypage/'
    // const url = urljoin('/api/v1/users/view/', id)
    const { data } = await axiosUtil.instance.get(url, {
        headers: {
            Authorization: token
        }
    })
    return data
}

/**
 * ログインユーザー自身を取得
 */
export const getMe = async () => {
    const url = '/api/v1/mypage/'
    const { data } = await axiosUtil.instance.get<User>(url)
    return data
}

export const login = async (email: string, password: string) => {
    // ログイン用API定義
    // TODO: あとで本番用に合わせる
    const url: string = process.env.NODE_ENV === 'development' ? "http://localhost:8080/api/v1/auth/login/" : 'https://song-score-online.herokuapp.com/api/v1/auth/login/'
    const requestData = {
        email: email,
        password: password,
    }
    // API叩く
    const axiosConfig: AxiosRequestConfig = {
        method: 'post',
        url: url,
        data: requestData,
    }
    // TODO:あとで型直す
    // @ts-ignore
    const { data } = axiosUtil.instance.post<AuthObject>(axiosConfig);
    return data
}

// 認証検証
export const getAuthObject = async () => {
    const url: string = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/v1/auth/object/' : 'https://song-score-online.herokuapp.com/api/v1/auth/object/'
    const { data } = await axiosUtil.instance.get<AuthObject>(url);
    return data;
}