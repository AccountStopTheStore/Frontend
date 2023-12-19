import { ResetPassword } from "@/src/@types/models/sendResetPasswordLink";
import { APIInstance } from "./instance";

const AUTH = "/auth";
/** member-controller */
export const memberAPI = {
  /** COMPLETED: sendEmailVerificationCode POST 요청하기 */
  sendEmailVerificationCode: (email: string) => {
    return APIInstance.post(AUTH + "/email-verifications", {
      email: email,
    });
  },
  /** COMPLETED: verifyEmail PUT 요청하기 */
  verifyEmail: (code: string, email: string) => {
    return APIInstance.put(AUTH + "/email-verifications", {
      code: code,
      email: email,
    });
  },
  /** COMPLETED: changePassword PUT 요청하기 */
  changePassword: (newPassword: string) => {
    return APIInstance.put(AUTH + "/password", {
      newPassword: newPassword,
    });
  },
  /** COMPLETED: sendResetPasswordLink POST 요청하기 */
  sendResetPasswordLink: (email: string) => {
    return APIInstance.post<ResetPassword>(AUTH + "/reset-password", {
      email: email,
    });
  },
  /** COMPLETED: 로그인 중일 때, resetPassword POST 요청하기 */
  resetPasswordLogin: (newPassword: string) => {
    return APIInstance.post(AUTH + `/password`, {
      newPassword: newPassword,
    });
  },
  /** COMPLETED: 로그인 중이 아닐 때, resetPassword POST 요청하기 */
  resetPasswordLogout: (
    memberId: number,
    password: string,
    resetPasswordToken: string
  ) => {
    return APIInstance.post(
      AUTH + `/reset-password/${memberId}/t/${resetPasswordToken}`,
      {
        password: password,
      }
    );
  },
  /** COMPLETED: signInWithEmail POST 요청하기 */
  signInWithEmail: (email: string, password: string) => {
    return APIInstance.post(AUTH + "/sign-in/email", {
      email: email,
      password: password,
    });
  },
  /** COMPLETED: signUpWithEmail POST 요청하기 */
  signUpWithEmail: (email: string, name: string, password: string) => {
    return APIInstance.post(AUTH + "/sign-up/email", {
      email: email,
      name: name,
      password: password,
    });
  },
  /** COMPLETED: signOut POST 요청하기 */
  signOut: () => {
    return APIInstance.post(AUTH + "/sign-out");
  },
  /** COMPLETED: withdrawal DELETE 요청하기 */
  withdrawal: () => {
    return APIInstance.delete(AUTH + "/withdrawal");
  },
};
