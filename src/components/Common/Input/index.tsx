import { InputUI } from "./style";

export interface InputProps {
  type: "text" | "password";
  placeholder: string;
}

function Input({ placeholder, type }: InputProps) {
  const handleFocus = () => {
    console.log("handleFocus");
  };
  const handleBlur = () => {
    console.log("handleBlur");
  };

  return (
    <InputUI.Input
      type={type}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

export default Input;
