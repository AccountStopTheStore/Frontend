import SendPNG from "@/public/icon/Send.png";
import BarGraphItemDetailsTopContainer from "../BarGraphItemDetailsTopContainer";
import { ChattingUI } from "./style";
// import { ChangeTime } from "@/src/assets/util";
import ChattingContent from "../ChattingContent";
import { API_WEBSOCKET_URL } from "@/src/core/api/instance";
import { useEffect, useState } from "react";
import Stomp from "stompjs";
import { ChangeTime } from "@/src/assets/util";

export interface Message {
  groupId: number;
  senderId: number;
  message: string;
  messageType: "TALK" | "LEAVE" | "ENTER";
  date: string;
}

function Chatting() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [stompClient, setStompClient] = useState<Stomp.Client>();

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

  const socket = new WebSocket(`${API_WEBSOCKET_URL}/ws`);
  const stomp = Stomp.over(socket);

  useEffect(() => {
    /* COMPLETED: Websocket 연결하기 */
    stomp.connect({}, () => {
      /** COMPLETED: 연결 성공 시 실행되는 함수 */
      setStompClient(stomp);

      console.log("Connected to WebSocket");
      /* COMPLETED: 채팅 메시지를 구독하기 */
      stomp.subscribe(
        `/chat/groups/${array1.groupId}`,
        (message: Stomp.Message) => {
          const newMessages: Message[] = [
            ...messages,
            JSON.parse(message.body),
          ];
          console.log("Received message: ", newMessages);
          setMessages(newMessages);
        }
      );
    });

    /** COMPLETED:  Websocket 연결 해제하기 */
    return () => {
      if (stompClient) {
        stompClient.disconnect(() =>
          console.log("Websocket 연결이 해제되었습니다.")
        );
      }
    };
  }, []);

  /* Click 이벤트 등 전송하기 관련 이벤트를 통한 채팅 메시지 전송하기 */
  const sendMessage = (message: string) => {
    if (stompClient && message !== "") {
      stompClient.send(
        "/app/send",
        {},
        JSON.stringify({
          groupId: 2,
          senderId: 9,
          message: message,
          messageType: "TALK",
        })
      );
      // /* Messages 배열 state에 추가 */
      const newMessage: Message = {
        groupId: 2,
        senderId: 9,
        message: message,
        messageType: "TALK",
        date: ChangeTime(new Date()),
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      /* input창 초기화 */
      setNewMessage("");
    }
  };

  return (
    <div>
      <BarGraphItemDetailsTopContainer array1={array1} />
      <ChattingUI.BottomContainer>
        <ChattingUI.ChattingList>
          {messages.map((content, index) => {
            return <ChattingContent key={index} content={content} />;
          })}
        </ChattingUI.ChattingList>
        <ChattingUI.ChattingInputContainer>
          <ChattingUI.ChattingInput
            type="text"
            value={newMessage}
            placeholder="채팅 입력"
            onChange={e => setNewMessage(e.target.value)}
          />
          <ChattingUI.SendButton onClick={() => sendMessage(newMessage)}>
            <img src={SendPNG} alt="Send PNG" />
          </ChattingUI.SendButton>
        </ChattingUI.ChattingInputContainer>
      </ChattingUI.BottomContainer>
    </div>
  );
}

export default Chatting;
