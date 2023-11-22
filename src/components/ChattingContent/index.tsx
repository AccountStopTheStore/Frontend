import { ChangeTime } from "@/src/assets/util";
import { ChattingContentUI } from "./style";

interface ChattingContentData {
  memberName: string;
  sendTime: string;
  messageContent: string;
  access: string;
}

interface ChattingContentProps {
  content: ChattingContentData;
}

function ChattingContent({ content }: ChattingContentProps) {
  return (
    <>
      {content.access === "enter" ? (
        <ChattingContentUI.EnterExitItem>
          <span>{`${content.memberName}님이 입장하셨습니다.`}</span>
        </ChattingContentUI.EnterExitItem>
      ) : content.access === "exit" ? (
        <ChattingContentUI.EnterExitItem>
          <span>{`${content.memberName}님이 퇴장하셨습니다.`}</span>
        </ChattingContentUI.EnterExitItem>
      ) : content.access === "others" ? (
        <ChattingContentUI.OthersItem>
          <div>
            <div>{content.memberName}</div>
            <div>{`${ChangeTime(content.sendTime)}`}</div>
          </div>
          <div>{content.messageContent}</div>
        </ChattingContentUI.OthersItem>
      ) : (
        <ChattingContentUI.MyItem>
          <div>{content.messageContent}</div>
          <div>
            <div>{content.memberName}</div>
            <div>{`${ChangeTime(content.sendTime)}`}</div>
          </div>
        </ChattingContentUI.MyItem>
      )}
    </>
  );
}

export default ChattingContent;
