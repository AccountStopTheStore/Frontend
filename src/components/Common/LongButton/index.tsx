import { theme } from "@/src/assets/theme";
import { LongButtonUI } from "./style";

interface LongButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  cancel?: boolean;
  buttonName: string;
  onClick?: () => void;
}

function LongButton({ type, cancel, buttonName, onClick }: LongButtonProps) {
  return (
    <LongButtonUI.LongButton
      type={type}
      onClick={onClick}
      style={cancel ? cancelStyle : buttonStyle}>
      {buttonName}
    </LongButtonUI.LongButton>
  );
}

const buttonStyle = {
  backgroundColor: `${theme.font_color.primary_green}`,
};
const cancelStyle = {
  backgroundColor: `${theme.font_color.white}`,
  border: `1px solid ${theme.font_color.gray2}`,
};

export default LongButton;
