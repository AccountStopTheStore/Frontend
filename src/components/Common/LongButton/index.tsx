import { LongButtonUI } from "./style";

interface LongButtonProps {
  buttonName: string;
  onClick: () => void;
}

function LongButton({ buttonName, onClick }: LongButtonProps) {
  return (
    <LongButtonUI.LongButton onClick={onClick}>
      {buttonName}
    </LongButtonUI.LongButton>
  );
}

export default LongButton;
