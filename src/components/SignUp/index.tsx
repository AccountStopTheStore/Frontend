import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import { SignUpUI } from "./style";

function SignUp() {
  const exampleFunction = () => {
    console.log("exampleFunction");
  };

  return (
    <SignUpUI.SectionContainer>
      <SignUpUI.Header>회원가입</SignUpUI.Header>
      <form onSubmit={exampleFunction}>
        <Input type={"text"} placeholder={"이름"} />
        <Input type={"text"} placeholder={"이메일"} />
        <Input type={"text"} placeholder={"인증번호를 입력해주세요."} />
        <Input type={"password"} placeholder={"비밀번호"} />
        <Input type={"password"} placeholder={"비밀번호 확인"} />
        <LongButton buttonName={"회원가입"} onClick={exampleFunction} />
      </form>
    </SignUpUI.SectionContainer>
  );
}

export default SignUp;
