import GoogleLogoPNG from "@/public/icon/Google_Logo.png";
import { OAuthButtonUI } from "./style";

interface OAuthButtonProps {
  onClick: () => void;
}

function OAuthButton({ onClick }: OAuthButtonProps) {
  return (
    <OAuthButtonUI.Button onClick={onClick}>
      <img src={GoogleLogoPNG} alt="GoogleLogoPNG" />
      Google 로그인
    </OAuthButtonUI.Button>
  );
}

export default OAuthButton;
