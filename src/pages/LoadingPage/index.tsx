import LogoImage from "@/src/components/Common/Logo/LogoImage";
import { LoadingPageUI } from "./style";

function LoadingPage() {
  return (
    <>
      <LoadingPageUI.PositionContainer>
        <LogoImage />
      </LoadingPageUI.PositionContainer>
    </>
  );
}

export default LoadingPage;
