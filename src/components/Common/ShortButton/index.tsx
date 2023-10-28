import { ShortButtonUI } from "./style";
import { theme } from "../../../assets/theme";

interface ShortButtonProps {
  isSaveButton: boolean;
  onClick: () => void;
}

function ShortButton({ isSaveButton, onClick }: ShortButtonProps) {
  const buttonStyle = isSaveButton ? saveButtonStyle : cancelButtonStyle;

  return (
    <ShortButtonUI.ButtonContainer style={buttonStyle} onClick={onClick}>
      {isSaveButton ? "저장" : "취소"}
    </ShortButtonUI.ButtonContainer>
  );
}

export default ShortButton;

// 취소, 저장에 따른 스타일 적용
const saveButtonStyle = {
  backgroundColor: `${theme.font_color.primary_green}`,
};

const cancelButtonStyle = {
  backgroundColor: `${theme.font_color.white}`,
  border: `1px solid ${theme.font_color.gray3}`,
};
