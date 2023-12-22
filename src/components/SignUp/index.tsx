import { ChangeEvent, useState } from "react";
import Input from "../Common/Input";
import LongButton from "../Common/LongButton";
import { SignUpUI } from "./style";
import { memberAPI } from "@/src/core/api/member";
import { isEmailValid, isPasswordValid } from "@/src/assets/util";
import { useNavigate } from "react-router-dom";

interface SignUpObject {
  name: string;
  email: string;
  authorizationNumber: number;
  password: string;
  passwordCheck: string;
}

function SignUp() {
  const navigate = useNavigate();
  const [openCheckInput, setOpenCheckInput] = useState(false);
  const [signUpObject, setSignUpObject] = useState<SignUpObject>({
    name: "",
    email: "",
    authorizationNumber: 0,
    password: "",
    passwordCheck: "",
  });

  /** COMPLETED: 회원가입 이름 입력 */
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSignUpObject(prev => ({
      ...prev,
      name: value,
    }));
  };
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    setSignUpObject(prev => ({
      ...prev,
      email: email,
    }));

    if (!isEmailValid(email)) {
      setErrorMessage(
        "유효하지 않은 이메일 형식입니다. 올바른 이메일을 입력하세요."
      );
    } else {
      setErrorMessage("");
    }
  };
  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSignUpObject(prev => ({
      ...prev,
      authorizationNumber: Number(value),
    }));
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;

    setSignUpObject(prev => ({
      ...prev,
      password: password,
    }));

    if (!isPasswordValid(password)) {
      setErrorMessage(
        "유효하지 않은 비밀번호 형식입니다. 올바른 이메일을 입력하세요."
      );
    } else {
      setErrorMessage("");
    }
  };
  const handleChangePasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (
      /* COMPLETED: 비밀번호가 같은지 확인 */
      signUpObject.password !== signUpObject.passwordCheck
    ) {
      setErrorMessage("* 비밀번호가 다릅니다. 다시 입력해주세요.");
    } else {
      setErrorMessage("");
    }
    setSignUpObject(prev => ({
      ...prev,
      passwordCheck: value,
    }));
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleAuthorizationEmail = async () => {
    try {
      const email = signUpObject.email;
      console.log("email: ", email);
      const response = memberAPI.sendEmailVerificationCode(email);

      console.log("status code: ", (await response).status);
      if ((await response).status === 200) {
        setOpenCheckInput(true);
        setErrorMessage("");
      }
    } catch (error) {
      console.log("Authorization Email error: ", error);
      setErrorMessage("전송에 실패했습니다. 확인 후 다시 시도해주세요.");
    }
  };
  const handleCheckEmail = async () => {
    try {
      const authorizationNumber = signUpObject.authorizationNumber;
      const response = memberAPI.verifyEmail(
        authorizationNumber.toString(),
        signUpObject.email
      );

      if ((await response).status === 200) {
        setErrorMessage("");
      }
    } catch (error) {
      console.log("Check Email error:", error);
      setErrorMessage(
        "인증번호 전송에 실패했습니다. 확인 후 다시 시도해주세요."
      );
    }
  };

  const submitSignUp = async () => {
    if (
      /* COMPLETED: Input에 값이 없을 때 */
      !signUpObject.name ||
      !signUpObject.email ||
      !signUpObject.authorizationNumber ||
      !signUpObject.password ||
      !signUpObject.passwordCheck
    ) {
      console.log("1");
      setErrorMessage("* 빈 곳이 존재합니다. 빈 곳을 채워주세요.");
      return;
    }

    if (
      /* COMPLETED: 비밀번호가 같은지 확인 */
      signUpObject.password !== signUpObject.passwordCheck
    ) {
      console.log("2");
      setErrorMessage("* 비밀번호가 비밀번호 확인과 다릅니다.");
      return;
    }

    try {
      const response = memberAPI.signUpWithEmail(
        signUpObject.email,
        signUpObject.name,
        signUpObject.password
      );

      if ((await response).status === 200) {
        console.log("3");
        setErrorMessage("");
        navigate("/");
      }
    } catch (error) {
      console.log("4");
      console.log("Submit error: ", error);
      setErrorMessage(
        "회원가입 전송에 실패했습니다. 확인 후 다시 시도해주세요."
      );
    }
  };

  return (
    <SignUpUI.SectionContainer>
      <SignUpUI.Header>회원가입</SignUpUI.Header>
      <form onSubmit={submitSignUp}>
        <Input
          type={"text"}
          value={signUpObject.name}
          placeholder={"이름"}
          onChange={handleChangeName}
          // handleBlur={handleInputBlur}
        />
        <Input
          type={"text"}
          placeholder={"이메일"}
          value={signUpObject.email}
          content={"인증"}
          isOpenButton={true}
          onClickButton={handleAuthorizationEmail}
          onChange={handleChangeEmail}
          // handleBlur={handleInputBlur}
        />
        {openCheckInput && (
          <Input
            type={"number"}
            placeholder={"인증번호를 입력해주세요."}
            value={signUpObject.authorizationNumber}
            content={"확인"}
            isOpenButton={true}
            onClickButton={handleCheckEmail}
            onChange={handleChangeCheck}
            // handleBlur={handleInputBlur}
          />
        )}
        <Input
          type={"password"}
          value={signUpObject.password}
          placeholder={"비밀번호"}
          onChange={handleChangePassword}
          // handleBlur={handleInputBlur}
        />
        <Input
          type={"password"}
          value={signUpObject.passwordCheck}
          placeholder={"비밀번호 확인"}
          onChange={handleChangePasswordCheck}
          // handleBlur={handleInputBlur}
        />
        <LongButton type={"submit"} buttonName={"회원가입"} />
      </form>
      {errorMessage && (
        <SignUpUI.ErrorContainer>{errorMessage}</SignUpUI.ErrorContainer>
      )}
    </SignUpUI.SectionContainer>
  );
}

export default SignUp;
