/**
 * 認証に必要な情報
 *  - jwt token
 *  - ログインユーザーID
 */
export default interface AuthObject {
  token: string;
  loginUserId: string;
}