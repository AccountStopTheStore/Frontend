import { ChangeEvent } from "react";
import { InputUI } from "./style";

export interface InputProps {
  type: "text" | "password" | "number" | "email";
  value?: string | number;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: () => void;
  content?: string;
  isOpenButton?: boolean;
  onClickButton?: () => void;
}

function Input({
  type,
  value,
  placeholder,
  onChange,
  handleBlur,
  content,
  isOpenButton,
  onClickButton,
}: InputProps) {
  return (
    <div style={{ position: "relative" }}>
      <InputUI.Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
        size={100}
      />
      {isOpenButton && (
        <InputUI.InputButton onClick={onClickButton}>
          {content}
        </InputUI.InputButton>
      )}
    </div>
  );
}

export default Input;
