import SendPNG from "@/public/icon/Send.png";
import BarGraphItemDetailsTopContainer from "../BarGraphItemDetailsTopContainer";
import { ChattingUI } from "./style";
// import { ChangeTime } from "@/src/assets/format";
import ChattingContent from "../ChattingContent";

function Chatting() {
  const array1 = {
    groupId: 2,
    groupName: "testGroup2",
    targetAmount: 200000,
    maxMembers: 5,
    currentMembers: 3,
    startedAt: "2023-10-16",
    finishedAt: "2023-12-25",
    createdAt: "2023-01-01T12:00:00",
    inviteToken: "TokenToInvite",
    groupMembers: [
      {
        memberId: 1,
        totalSavingAmount: 1000000,
      },
      {
        memberId: 2,
        totalSavingAmount: 50000,
      },
      {
        memberId: 3,
        totalSavingAmount: 300000,
      },
      {
        memberId: 3,
        totalSavingAmount: 300000,
      },
      {
        memberId: 3,
        totalSavingAmount: 300000,
      },
      {
        memberId: 3,
        totalSavingAmount: 300000,
      },
    ],
  };

  const chattingArray = [
    {
      memberName: "김나나",
      sendTime: "2023-01-01T12:00:00",
      messageContent: "",
      access: "exit",
    },
    {
      memberName: "Aiden",
      sendTime: "2023-01-01T12:00:00",
      messageContent:
        "메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1",
      access: "others",
    },
    {
      memberName: "Aiden",
      sendTime: "2023-01-01T12:00:00",
      messageContent:
        "메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1메시지 내용 1",
      access: "me",
    },
    {
      memberName: "임경락",
      sendTime: "2023-01-01T12:00:00",
      messageContent: "메시지 내용 1",
      access: "enter",
    },
  ];
  return (
    <div>
      <BarGraphItemDetailsTopContainer array1={array1} />
      <ChattingUI.BottomContainer>
        <ChattingUI.ChattingList>
          {chattingArray.map((content) => {
            return <ChattingContent content={content} />;
          })}
        </ChattingUI.ChattingList>
        <ChattingUI.ChattingInputContainer>
          <ChattingUI.ChattingInput type="text" placeholder="채팅 입력" />
          <ChattingUI.SendButton>
            <img src={SendPNG} alt="Send PNG" />
          </ChattingUI.SendButton>
        </ChattingUI.ChattingInputContainer>
      </ChattingUI.BottomContainer>
    </div>
  );
}

export default Chatting;
