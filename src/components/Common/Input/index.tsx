import { InputUI } from "./style";

export interface InputProps {
  placeholder: string;
}

function Input({ placeholder }: InputProps) {
  const handleFocus = () => {
    console.log("handleFocus");
  };
  const handleBlur = () => {
    console.log("handleBlur");
  };

  return (
    <InputUI.Input
      type="text"
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

export default Input;
