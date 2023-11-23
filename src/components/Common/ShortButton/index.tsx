import { ShortButtonUI } from "./style";

interface ShortButtonProps {
  isSaveButton: boolean;
  onCancelClick: () => void;
  onSaveClick?: () => void;
  onDeleteClick?: () => void;
}

function ShortButton({
  isSaveButton,
  onCancelClick,
  onSaveClick,
  onDeleteClick,
}: ShortButtonProps) {
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
      <ShortButtonUI.ButtonWrapper>
        <ShortButtonUI.CancelButton onClick={onCancelClick} style={deleteStyle}>
          취소
        </ShortButtonUI.CancelButton>
        <ShortButtonUI.GreenButton
          onClick={isSaveButton ? onSaveClick : onDeleteClick}
          style={deleteStyle}>
          {isSaveButton ? "저장" : "탈퇴"}
        </ShortButtonUI.GreenButton>
      </ShortButtonUI.ButtonWrapper>
    </ShortButtonUI.Container>
  );
}

export default ShortButton;
