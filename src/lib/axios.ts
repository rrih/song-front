import axios, { AxiosInstance } from 'axios'

// TODO: 本番URLと動的に切り替えるようにする
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'https://song-score-online.herokuapp.com/'

export const instance: AxiosInstance = axios.create({ baseURL })

export const setToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const resetToken = (): void => {
  instance.defaults.headers.common.Authorization = undefined
}

export const isExistsToken = (): string => {
  return instance.defaults.headers.common.Authorization
}
