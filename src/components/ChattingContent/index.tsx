import { ChangeTime } from "@/src/assets/util";
import { ChattingContentUI } from "./style";
import { Message } from "../Chatting";

interface ChattingContentData {
  // memberName: string;
  // sendTime: string;
  // messageContent: string;
  // access: string;
}

interface ChattingContentProps {
  // content: ChattingContentData;
  content: Message;
}

function ChattingContent({ content }: ChattingContentProps) {
  return (
    <>
      {content.messageType === "ENTER" ? (
        <ChattingContentUI.EnterExitItem>
          <span>{`${content.senderId}님이 입장하셨습니다.`}</span>
        </ChattingContentUI.EnterExitItem>
      ) : content.messageType === "LEAVE" ? (
        <ChattingContentUI.EnterExitItem>
          <span>{`${content.senderId}님이 퇴장하셨습니다.`}</span>
        </ChattingContentUI.EnterExitItem>
      ) : (
        <ChattingContentUI.MyItem>
          <div>{content.message}</div>
          <div>
            <div>{content.senderId}</div>
          </div>
        </ChattingContentUI.MyItem>
      )}
    </>
  );
}

export default ChattingContent;
