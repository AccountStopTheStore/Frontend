import { LabelInputUI } from "./style";

export interface LabelInputProps {
  type: string;
  label: string;
  inputId: string;
  inputName: string;
  placeholder: string;
  onClick?: () => void;
  readonly?: boolean | undefined;
}

function LabelInput({
  type = "text",
  label,
  inputId,
  inputName,
  placeholder,
  onClick,
  readonly,
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
        onClick={onClick}
        readOnly={readonly}
      />
    </LabelInputUI.Container>
  );
}

export default LabelInput;
