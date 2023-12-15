import { ReactNode } from "react";
import { FakeInputButtonUI } from "./style";

interface FakeInputButtonProps {
  children: ReactNode;
  onClick: () => void;
}

function FakeInputButton({ children, onClick }: FakeInputButtonProps) {
  return (
    <FakeInputButtonUI.InputButton onClick={onClick}>
      {children}
    </FakeInputButtonUI.InputButton>
  );
}

export default FakeInputButton;
