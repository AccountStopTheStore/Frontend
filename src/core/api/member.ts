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
    return APIInstance.post(AUTH + "/reset-password", {
      email: email,
    });
  },
  /** COMPLETED: resetPassword POST 요청하기 */
  resetPassword: (memberId: number, password: string, token: string) => {
    return APIInstance.post(AUTH + `/reset-password/${memberId}/t/${token}`, {
      password: password,
    });
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
