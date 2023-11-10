import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import OAuthButton from "../OAuthButton";
import { LoginUI } from "./style";

function Login() {
  const exampleFunction = () => {
    console.log("exampleFunction");
  };

  return (
    <LoginUI.SectionContainer>
      <LoginUI.Header>로그인</LoginUI.Header>
      <form onSubmit={exampleFunction}>
        <Input placeholder={"이메일"} />
        <Input placeholder={"비밀번호"} />
        <LongButton buttonName={"로그인"} onClick={exampleFunction} />
      </form>
      <LoginUI.OtherPageContainer>
        <button>비밀번호 재설정</button>
        <button>회원가입</button>
      </LoginUI.OtherPageContainer>
      <LoginUI.DivisionLine>또는</LoginUI.DivisionLine>
      <OAuthButton onClick={exampleFunction} />
    </LoginUI.SectionContainer>
  );
}

export default Login;
