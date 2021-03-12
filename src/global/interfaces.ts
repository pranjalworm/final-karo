import { MessageType } from "./enums";

export interface FinalMessage {
  type: MessageType;
  data: PollMessage | VoteMessage | ResultMessage;
}

export interface PollMessage {
  pollId: string;
  category: string;
  options: string;
}

export interface VoteMessage {
  pollId: string;
  option: string;
  peerId: string;
}

export interface ResultMessage {
  pollId: string;
  result: { [key: string]: string };
}