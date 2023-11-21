// import { postData } from "@/src/core/api/instance";
// import { AuthAPIInstance } from "@/src/core/api/instance";
import { memberAPI } from "@/src/core/api/member";
import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
// import OAuthButton from "../OAuthButton";
import { LoginUI } from "./style";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import OAuthButton from "../OAuthButton";
import { APIInstance, AuthAPIInstance } from "@/src/core/api/instance";

// const URL = "https://asts.cozybinarybase.com:8443";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    /** COMPLETED: 1. 서버로부터 set-Cookie를 통해 JWT 토큰 받기 */
    const response = memberAPI.signInWithEmail(
      "skatewang99@gmail.com",
      "12345678"
    );

    if ((await response).status === 200) {
      /** COMPLETED: 2. 메인 페이지(가계부)로 이동하기 */
      navigate("/account");
    } else if ((await response).status === 400) {
      navigate("/signup");
    }
  };

  const handleOAuthLogin = async () => {
    memberAPI.signInWithOAuth("임경락");
  };
  return (
    <LoginUI.SectionContainer>
      <LoginUI.Header>로그인</LoginUI.Header>
      <form onSubmit={handleLogin}>
        <Input type={"text"} placeholder={"이메일"} />
        <Input type={"password"} placeholder={"비밀번호"} />
        <LongButton type={"submit"} buttonName={"로그인"} />
      </form>
      <LoginUI.OtherPageContainer>
        <button>비밀번호 재설정</button>
        <button>회원가입</button>
      </LoginUI.OtherPageContainer>
      <LoginUI.DivisionLine>또는</LoginUI.DivisionLine>
      {/* <button onClick={handleOAuthLogin}>로그인</button> */}
      <OAuthButton
        path={
          "https://asts.cozybinarybase.com:8443/oauth2/authorization/google"
        }
      />
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("credentialResponse:", credentialResponse.credential);

          APIInstance.post("/oauth", credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
    </LoginUI.SectionContainer>
  );
}

export default Login;
