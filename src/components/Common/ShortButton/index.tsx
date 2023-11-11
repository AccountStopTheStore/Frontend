import { ShortButtonUI } from "./style";

interface ShortButtonProps {
  isSaveButton: boolean;
  onClick: () => void;
}

function ShortButton({ isSaveButton, onClick }: ShortButtonProps) {
  const deleteAccountButton = {
    width: "126px",
  };
  const deleteContainerPadding = {
    padding: "30px",
  };

  const deleteStyle = isSaveButton ? undefined : deleteAccountButton;
  const deleteContainerStyle = isSaveButton
    ? undefined
    : deleteContainerPadding;

  return (
    <ShortButtonUI.Container style={deleteContainerStyle}>
      <ShortButtonUI.CancelButton onClick={onClick} style={deleteStyle}>
        취소
      </ShortButtonUI.CancelButton>
      <ShortButtonUI.GreenButton onClick={onClick} style={deleteStyle}>
        {isSaveButton ? "저장" : "탈퇴"}
      </ShortButtonUI.GreenButton>
    </ShortButtonUI.Container>
  );
}

export default ShortButton;
