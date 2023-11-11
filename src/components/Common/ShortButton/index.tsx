import { ShortButtonUI } from "./style";

interface ShortButtonProps {
  isSaveButton: boolean;
  onClick: () => void;
}

function ShortButton({ isSaveButton, onClick }: ShortButtonProps) {
  return (
    <ShortButtonUI.Container>
      <ShortButtonUI.CancelButton onClick={onClick}>
        취소
      </ShortButtonUI.CancelButton>
      <ShortButtonUI.GreenButton onClick={onClick}>
        {isSaveButton ? "저장" : "탈퇴"}
      </ShortButtonUI.GreenButton>
    </ShortButtonUI.Container>
  );
}

export default ShortButton;
