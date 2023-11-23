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
  message: string;
  messageType: "TALK" | "LEAVE" | "ENTER";
  senderId: number;
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

  const connect = async () => {
    const socket = new WebSocket(`${API_WEBSOCKET_URL}/ws`);
    console.log("socket.onmessage: ", socket.onmessage);

    const stomp = Stomp.over(socket);
    // stomp.debug = msg => console.log("debug message: ", msg);
    /* COMPLETED: Websocket 연결하기 */
    stomp.connect({}, () => {
      /** COMPLETED: 연결 성공 시 실행되는 함수 */
      setStompClient(stomp);

      console.log("Connected to WebSocket");
      /* COMPLETED: 채팅 메시지를 구독하기 */
      stomp.subscribe(`/chat/groups/3`, onReceiveMessage);
    });
  };

  const onReceiveMessage = async (message: Stomp.Message) => {
    setMessages(prev => {
      const newMessage = JSON.parse(message.body);
      return [...prev, newMessage];
    });
  };

  /** COMPLETED:  Websocket 연결 해제하기 */
  const disconnect = () => {
    if (stompClient) {
      stompClient.disconnect(() =>
        console.log("Websocket 연결이 해제되었습니다.")
      );
    }
  };

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  /* Click 이벤트 등 전송하기 관련 이벤트를 통한 채팅 메시지 전송하기 */
  const sendMessage = (message: string) => {
    if (stompClient && message !== "") {
      stompClient.send(
        "/app/send",
        {},
        JSON.stringify({
          groupId: 3,
          message: message,
          messageType: "TALK",
        })
      );
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
