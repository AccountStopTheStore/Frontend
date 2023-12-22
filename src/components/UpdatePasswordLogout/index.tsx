import { useNavigate } from "react-router-dom";
import ShortButton from "../Common/ShortButton";
import { memberAPI } from "@/src/core/api/member";
import { ChangeEvent, useState } from "react";
import LabelInput from "../Common/LabelInput";
import { UpdatePasswordUI } from "./style";

function UpdatePasswordLogout() {
  const navigate = useNavigate();
  const [updatePasswordInfo, setUpdatePasswordInfo] = useState({
    memberId: 0,
    password: "",
    passwordCheck: "",
    resetPasswordToken: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUpdatePasswordInfo(prev => ({
      ...prev,
      password: value,
    }));
  };
  const handlePasswordCheckInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdatePasswordInfo(prev => ({
      ...prev,
      passwordCheck: value,
    }));

    if (value !== updatePasswordInfo.password) {
      setErrorMessage("* 비밀번호가 비밀번호 확인과 다릅니다.");
    } else {
      setErrorMessage("");
    }
  };

  const handleSaveButton = async () => {
    if (updatePasswordInfo.password !== updatePasswordInfo.passwordCheck)
      return;
    try {
      const response = await memberAPI.resetPasswordLogout(
        updatePasswordInfo.memberId,
        updatePasswordInfo.password,
        updatePasswordInfo.resetPasswordToken
      );

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("updatePassword error: ", error);
    }
    navigate("/");
  };
  const handleCancelButton = () => {
    navigate("/");
  };

  return (
    <UpdatePasswordUI.Container>
      <div>
        <LabelInput
          type="password"
          label="비밀번호"
          inputId="password"
          placeholder="비밀번호 입력"
          value={updatePasswordInfo.password}
          onChange={handlePasswordInput}
        />
        <LabelInput
          type="password"
          label="비밀번호확인"
          inputId="passwordCheck"
          placeholder="비밀번호 입력 확인"
          value={updatePasswordInfo.passwordCheck}
          onChange={handlePasswordCheckInput}
        />
        {errorMessage && <div>{errorMessage}</div>}
      </div>
      <ShortButton
        isSaveButton
        onSaveClick={handleSaveButton}
        onCancelClick={handleCancelButton}
      />
    </UpdatePasswordUI.Container>
  );
}

export default UpdatePasswordLogout;
