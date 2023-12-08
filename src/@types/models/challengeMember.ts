import { MessageTypeSymbol } from "./messageTypeSymbol";

/**
 * 챌린지 메시지 조회 Response Interface
 */
export type GetMessages = GetMessage[];

export type GetMessage = {
  id: number;
  groupId: number;
  senderId: number;
  message: string;
  messageType: MessageTypeSymbol;
  createdAt: string;
};
