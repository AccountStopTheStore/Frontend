import { memberAPI } from "@/src/core/api/member";
import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import { LoginUI } from "./style";
import { useNavigate } from "react-router-dom";
import OAuthButton from "../OAuthButton";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    /** COMPLETED: 1. 서버로부터 set-Cookie를 통해 JWT 토큰 받기 */
    const response = memberAPI.signInWithEmail(
      "skatewang@naver.com",
      "12345678"
    );
    console.log("response: ");

    if ((await response).status === 200) {
      /** COMPLETED: 2. 메인 페이지(가계부)로 이동하기 */
      navigate("/account");
    } else if ((await response).status === 400) {
      navigate("/signup");
    }
  };

  return (
    <LoginUI.SectionContainer>
      <LoginUI.Header>로그인</LoginUI.Header>
      <div>
        {/* <form> */}
        <Input type={"text"} placeholder={"이메일"} />
        <Input type={"password"} placeholder={"비밀번호"} />
        <LongButton
          type={"submit"}
          buttonName={"로그인"}
          onClick={handleLogin}
        />
        {/* </form> */}
      </div>
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
    </LoginUI.SectionContainer>
  );
}

export default Login;
