import { MessageType } from "../../global/enums";
import { FinalMessage, PollMessage, ResultMessage, VoteMessage } from "../../global/interfaces";
import PeerXmn from "./peer-xmn";

export namespace OutgoingMessageService {

  const send = (data: PollMessage | VoteMessage | ResultMessage, type: MessageType) => {

    const message: FinalMessage = {
      type,
      data
    }

    PeerXmn.sendMessage(message);
  }

  // for host's use
  export const sendPollMessage = (message: PollMessage) => {

    send(message, MessageType.Poll);
  }

  // for host's use
  export const sendResultMessage = (message: ResultMessage) => {

    send(message, MessageType.Result);
  }

  // for participant's use
  export const sendVoteMessage = (message: VoteMessage) => {

    send(message, MessageType.Vote);
  }

}