import { memberAPI } from "@/src/core/api/member";
import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import { ResetPasswordUI } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleResetPassword = async () => {
    try {
      const response = await memberAPI.sendResetPasswordLink(email);

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("passwordReset error: ", error);
    }
  };

  const handleCancelButton = () => {
    navigate("/");
  };

  return (
    <ResetPasswordUI.SectionContainer>
      <ResetPasswordUI.Header>비밀번호 재설정</ResetPasswordUI.Header>
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
          onClick={handleResetPassword}
        />
        <LongButton
          type={"button"}
          cancel
          buttonName={"취소"}
          onClick={handleCancelButton}
        />
      </div>
    </ResetPasswordUI.SectionContainer>
  );
}

export default ResetPassword;