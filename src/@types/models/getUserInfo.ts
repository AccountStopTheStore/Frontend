/**
 * 로그인 UserInfo 조회 Response
 */
export type GetUserInfo = {
  name: string;
  id: number;
  email: string;
  refreshTokenRemainingTime: number;
};
