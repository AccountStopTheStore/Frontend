import ChatPNG from "@/public/icon/Chat.png";
import { FixedCircleButtonUI } from "./style";
import { useNavigate } from "react-router-dom";

interface FixedCircleButtonProps {
  buttonType: "입력" | "채팅";
}

function FixedCircleButton({ buttonType }: FixedCircleButtonProps) {
  const navigation = useNavigate();
  const eventHandler = (buttonType: "입력" | "채팅") => {
    console.log("buttonType", buttonType);
    /** TODO: buttonType에 따라 이동 경로 설정 */
    if (buttonType === "입력") {
      /** 입력 페이지로 이동 */
      navigation("/recordAccountBook");
    } else if (buttonType === "채팅") {
      /** 채팅 페이지로 이동 */
      navigation("/chatting");
    }
  };

  const content =
    buttonType === "입력" ? (
      <FixedCircleButtonUI.PlusButton variant="text"></FixedCircleButtonUI.PlusButton>
    ) : (
      <FixedCircleButtonUI.ChatButton variant="text">
        <img src={ChatPNG} alt="account PNG" />
      </FixedCircleButtonUI.ChatButton>
    );

  return (
    <FixedCircleButtonUI.ButtonItem onClick={() => eventHandler(buttonType)}>
      {content}
    </FixedCircleButtonUI.ButtonItem>
  );
}

export default FixedCircleButton;
