import { memberAPI } from "@/src/core/api/member";
import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import { LoginUI } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import OAuthButton from "../OAuthButton";
import { ChangeEvent, FormEvent, useState } from "react";
import { isPasswordValid, isEmailValid } from "@/src/assets/util";
import { useSetRecoilState } from "recoil";
import { TokenAtom } from "@/src/hooks/recoil/useLogin";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const setAccessToken = useSetRecoilState(TokenAtom);
  const location = useLocation();
  const from = location?.state?.redirectedFrom?.pathname || "/account";

  const decodeSetCookieHeader = (setCookieHeader: string[] | undefined) => {
    console.log("setCookieHeader: ", setCookieHeader);
    /* 쿠키값이 없을 경우, 반환하기 */
    if (!setCookieHeader) return;

    /* Set-cookie Header에서 쿠키값 추출하기 */
    const cookieValue = setCookieHeader[2].split(";")[0];

    /* 쿠키값 Decoding */
    const decodedValue = decodeURIComponent(cookieValue);

    return decodedValue;
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 폼 기본 동작 방지
    /** COMPLETED: 1. 서버로부터 set-Cookie를 통해 JWT 토큰 받기 */
    const response = await memberAPI.signInWithEmail(
      login.email,
      login.password
    );

    if (response.status === 200) {
      const userInfo = document.cookie;
      // .split("; ")
      // .find(row => row.startsWith("userInfo="))
      // .split("=")[1];
      console.log("userInfo: ", userInfo);
      const decodedCookieValue = decodeSetCookieHeader(
        response.headers["set-cookie"]
      );
      console.log("decoded cookie value: ", decodedCookieValue);

      if (decodedCookieValue) {
        setAccessToken(() => decodedCookieValue);
        /** COMPLETED: 2. 메인 페이지(가계부)로 이동하기 */
        navigate(from);
      }
    } else if (response.status === 400) {
      navigate("/signup");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handlePasswordReset = () => {
    navigate("/resetpassword");
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
      <form onSubmit={handleLogin}>
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
        <LongButton type={"submit"} buttonName={"로그인"} />
      </form>
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
