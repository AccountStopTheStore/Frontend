import ChatPNG from "@/public/icon/Chat.png";
import { FixedCircleButtonUI } from "./style";
import { Params, useNavigate } from "react-router-dom";

interface FixedCircleButtonProps {
  buttonType: "입력" | "채팅";
  params?: Readonly<Params<string>>;
}

function FixedCircleButton({ buttonType, params }: FixedCircleButtonProps) {
  const navigation = useNavigate();
  const eventHandler = (buttonType: "입력" | "채팅") => {
    /** TODO: buttonType에 따라 이동 경로 설정 */
    if (buttonType === "입력") {
      /** 입력 페이지로 이동 */
      navigation("/recordAccountBook");
    } else if (buttonType === "채팅") {
      /** 채팅 페이지로 이동 */
      if (params !== undefined) {
        navigation(`/chatting/${Number(params.slug)}`);
      }
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
