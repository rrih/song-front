import axios from 'axios'

// TODO: 本番URLと動的に切り替えるようにする
const baseURL = 'http://localhost:8080/'

export const instance = axios.create({ baseURL })

export const setToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const resetToken = (): void => {
  instance.defaults.headers.common.Authorization = undefined
}

export const isExistsToken = (): string => {
  return instance.defaults.headers.common.Authorization
}
