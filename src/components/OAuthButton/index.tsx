import GoogleLogoPNG from "@/public/icon/Google_Logo.png";
import { OAuthButtonUI } from "./style";

interface OAuthButtonProps {
  path: string;
}

function OAuthButton({ path }: OAuthButtonProps) {
  return (
    <OAuthButtonUI.LinkButton to={path}>
      <img src={GoogleLogoPNG} alt="GoogleLogoPNG" />
      Google 로그인
    </OAuthButtonUI.LinkButton>
  );
}

export default OAuthButton;
