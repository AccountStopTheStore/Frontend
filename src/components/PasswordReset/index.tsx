import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import { PasswordResetUI } from "./style";

function PasswordReset() {
  const exampleFunction = () => {
    console.log("exampleFunction");
  };

  return (
    <PasswordResetUI.SectionContainer>
      <PasswordResetUI.Header>비밀번호 재설정</PasswordResetUI.Header>
      <form onSubmit={exampleFunction}>
        <Input placeholder={"이메일"} />
        <LongButton buttonName={"발송"} onClick={exampleFunction} />
      </form>
    </PasswordResetUI.SectionContainer>
  );
}

export default PasswordReset;
