import { LabelInputUI } from "./style";

export interface LabelInputProps {
  label: string;
  inputId: string;
  inputName: string;
  placeholder: string;
}

function LabelInput({
  label,
  inputId,
  inputName,
  placeholder,
}: LabelInputProps) {
  return (
    <LabelInputUI.Container>
      <LabelInputUI.Label htmlFor={inputId}>{label}</LabelInputUI.Label>
      <LabelInputUI.Input
        type="text"
        id={inputId}
        name={inputName}
        placeholder={placeholder}
        spellCheck={false}
      />
    </LabelInputUI.Container>
  );
}

export default LabelInput;
