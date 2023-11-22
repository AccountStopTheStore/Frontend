import { ChangeEvent } from "react";
import { InputUI } from "./style";

export interface InputProps {
  type: "text" | "password" | "number";
  value?: string | number;
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: () => void;
  content?: string;
  isOpenButton?: boolean;
  onClickButton?: () => void;
}

function Input({
  type,
  value,
  placeholder,
  handleChange,
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
        onChange={handleChange}
        onBlur={handleBlur}
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
