import { MessageType } from "../../global/enums";
import { FinalMessage, PollMessage, ResultMessage, VoteMessage } from "../../global/interfaces";

export namespace IncomingMessageService {

  export const receive = (message: FinalMessage) => {

    const type = message.type;
    const data = message.data;

    switch (type) {
      case MessageType.Poll:
        handlePollMessage(data as PollMessage);
        break;

      case MessageType.Vote:
        handleVoteMessage(data as VoteMessage);
        break;

      case MessageType.Result:
        handleResultMessage(data as ResultMessage);
        break;
    }
  }


  // todo: in all of the below handlers think about the scenario where user is doing something else

  // for participant's use
  const handlePollMessage = (message: PollMessage) => {

    // todo: change state of the app to reflect poll data
    console.log(`wasp > poll message`);
    console.log(message);

  }

  // for participant's use
  const handleResultMessage = (message: ResultMessage) => {
    // todo: change state of the app to reflect result data
    console.log(`wasp > result message`);
    console.log(message);

  }

  // for host's use
  const handleVoteMessage = (message: VoteMessage) => {

    // todo: change state of the app to reflect vote
    console.log(`wasp > vote message`);
    console.log(message);

  }

}