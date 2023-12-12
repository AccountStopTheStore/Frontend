import { memberAPI } from "@/src/core/api/member";
import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import { PasswordResetUI } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const handlePasswordReset = () => {
    memberAPI.sendResetPasswordLink(email).then().catch();
  };

  const navigate = useNavigate();
  const handleCancelButton = () => {
    navigate("/");
  };

  return (
    <PasswordResetUI.SectionContainer>
      <PasswordResetUI.Header>비밀번호 재설정</PasswordResetUI.Header>
      <div>
        <Input
          placeholder={"이메일"}
          type={"text"}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <LongButton
          type={"button"}
          buttonName={"발송"}
          onClick={handlePasswordReset}
        />
        <LongButton
          type={"button"}
          cancel
          buttonName={"취소"}
          onClick={handleCancelButton}
        />
      </div>
    </PasswordResetUI.SectionContainer>
  );
}

export default PasswordReset;
