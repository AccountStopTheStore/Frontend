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
        <Input placeholder={"이름"} />
        <Input placeholder={"이메일"} />
        <Input placeholder={"인증번호를 입력해주세요."} />
        <Input placeholder={"비밀번호"} />
        <Input placeholder={"비밀번호 확인"} />
        <LongButton buttonName={"회원가입"} onClick={exampleFunction} />
      </form>
    </SignUpUI.SectionContainer>
  );
}

export default SignUp;
