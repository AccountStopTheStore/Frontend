import SendPNG from "@/public/icon/Send.png";
import BarGraphItemDetailsTopContainer from "../BarGraphItemDetailsTopContainer";
import { ChattingUI } from "./style";
import ChattingContent from "../ChattingContent";
import { API_WEBSOCKET_URL } from "@/src/core/api/instance";
import { useEffect, useState } from "react";
import Stomp from "stompjs";
import { useRecoilState } from "recoil";
import { getChallengeGroupAtom } from "@/src/hooks/recoil/useGetChallengeGroup";

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
  const [challengeGroup] = useRecoilState(getChallengeGroupAtom);

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
      stomp.subscribe(`/chat/groups/${challengeGroup.id}`, onReceiveMessage);
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
          groupId: challengeGroup.id,
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
      <BarGraphItemDetailsTopContainer challengeGroup={challengeGroup} />
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
