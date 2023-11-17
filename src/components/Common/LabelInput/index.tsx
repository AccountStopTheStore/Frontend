import { LabelInputUI } from "./style";

export interface LabelInputProps {
  type: string;
  label: string;
  inputId: string;
  inputName: string;
  placeholder: string;
}

function LabelInput({
  type = "text",
  label,
  inputId,
  inputName,
  placeholder,
}: LabelInputProps) {
  return (
    <LabelInputUI.Container>
      <LabelInputUI.Label htmlFor={inputId}>{label}</LabelInputUI.Label>
      <LabelInputUI.Input
        type={type}
        id={inputId}
        name={inputName}
        placeholder={placeholder}
        spellCheck={false}
      />
    </LabelInputUI.Container>
  );
}

export default LabelInput;
