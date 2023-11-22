import { LongButtonUI } from "./style";

interface LongButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  buttonName: string;
  onClick?: () => void;
}

function LongButton({ type, buttonName, onClick }: LongButtonProps) {
  return (
    <LongButtonUI.LongButton type={type} onClick={onClick}>
      {buttonName}
    </LongButtonUI.LongButton>
  );
}

export default LongButton;
