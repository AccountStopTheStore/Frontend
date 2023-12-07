import { memberAPI } from "@/src/core/api/member";
import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import { LoginUI } from "./style";
import { useNavigate } from "react-router-dom";
import OAuthButton from "../OAuthButton";
import { ChangeEvent, useState } from "react";
import { isPasswordValid, isEmailValid } from "@/src/assets/util";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    /** COMPLETED: 1. 서버로부터 set-Cookie를 통해 JWT 토큰 받기 */
    const response = await memberAPI.signInWithEmail(
      login.email,
      login.password
    );

    if ((await response).status === 200) {
      /** COMPLETED: 2. 메인 페이지(가계부)로 이동하기 */
      navigate("/account");
    } else if ((await response).status === 400) {
      navigate("/signUp");
    }
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };
  const handlePasswordReset = () => {
    navigate("/passwordReset");
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLogin(prev => ({
      ...prev,
      email: value,
    }));

    if (!isEmailValid(value)) {
      setEmailError("이메일 양식이 올바르지 않습니다. 다시 확인해주세요.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setLogin(prev => ({
      ...prev,
      password: value,
    }));

    if (!isPasswordValid(value)) {
      setPasswordError("비밀번호 양식이 올바르지 않습니다. 다시 확인해주세요.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <LoginUI.SectionContainer>
      <LoginUI.Header>로그인</LoginUI.Header>
      <div>
        <Input
          type={"email"}
          placeholder={"이메일"}
          value={login.email}
          onChange={handleEmailInput}
        />
        {emailError && (
          <LoginUI.ErrorContainer style={{ color: "red" }}>
            {emailError}
          </LoginUI.ErrorContainer>
        )}
        <Input
          type={"password"}
          placeholder={"비밀번호"}
          value={login.password}
          onChange={handlePasswordInput}
        />
        {passwordError && (
          <LoginUI.ErrorContainer style={{ color: "red" }}>
            {passwordError}
          </LoginUI.ErrorContainer>
        )}
        <LongButton
          type={"submit"}
          buttonName={"로그인"}
          onClick={handleLogin}
        />
      </div>
      <LoginUI.OtherPageContainer>
        <button onClick={handlePasswordReset}>비밀번호 재설정</button>
        <button onClick={handleSignUp}>회원가입</button>
      </LoginUI.OtherPageContainer>
      <LoginUI.DivisionLine>또는</LoginUI.DivisionLine>
      <OAuthButton
        path={
          "https://asts.cozybinarybase.com:8443/oauth2/authorization/google"
        }
      />
    </LoginUI.SectionContainer>
  );
}

export default Login;
