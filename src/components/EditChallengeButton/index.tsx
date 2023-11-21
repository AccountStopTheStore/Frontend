import { EditChallengeButtonUI } from "./style";

interface EditChallengeButtonProps {
  onEditButton: () => void;
}

function EditChallengeButton({ onEditButton }: EditChallengeButtonProps) {
  return (
    <EditChallengeButtonUI.Wrapper>
      <EditChallengeButtonUI.EditButton type="button" onClick={onEditButton}>
        수정
      </EditChallengeButtonUI.EditButton>
    </EditChallengeButtonUI.Wrapper>
  );
}

export default EditChallengeButton;
