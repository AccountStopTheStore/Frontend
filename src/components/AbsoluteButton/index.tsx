import { AbsoluteButtonUI } from "./style";

interface AbsoluteButtonProps {
  content: string;
  handleButton: () => void;
}

function AbsoluteButton({ content, handleButton }: AbsoluteButtonProps) {
  return (
    <AbsoluteButtonUI.Wrapper>
      <AbsoluteButtonUI.AbsoluteButton type="button" onClick={handleButton}>
        {content}
      </AbsoluteButtonUI.AbsoluteButton>
    </AbsoluteButtonUI.Wrapper>
  );
}

export default AbsoluteButton;
