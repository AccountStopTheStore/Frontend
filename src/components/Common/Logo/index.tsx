import { LogoUI } from "./style";
import LogoImage from "./LogoImage";

function Logo() {
  return (
    <LogoUI.LogoContainer>
      <LogoImage />
      <LogoUI.Title>가게그만가계</LogoUI.Title>
    </LogoUI.LogoContainer>
  );
}

export default Logo;
