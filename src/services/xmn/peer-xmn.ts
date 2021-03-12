import { FinalMessage } from '../../global/interfaces';
import { Utils } from '../../global/utils';
import { IncomingMessageService } from './incoming-message-service';

declare let Peer;

export default class PeerXmn {

  private static peer;
  private static peerId: string;
  private static hostId: string;
  private static connection: any;

  static async init() {

    PeerXmn.peerId = Utils.getIdParam();

    PeerXmn.peer = new Peer();

    PeerXmn.peer.on('open', (id: string) => {
      PeerXmn.peerId = id;
    });

    if (PeerXmn.hostId) {
      PeerXmn.connectToHost(PeerXmn.hostId);

    } else {
      PeerXmn.peer.on('connection', (connection: any) => {
        PeerXmn.connection = connection;
        PeerXmn.handleIncomingMessages();

        // send back pollMessage to the participant
      });
    }
  }

  static getSelfPeerId() {
    return PeerXmn.peerId;
  }

  static connectToHost(hostId: string) {

    PeerXmn.connection = PeerXmn.peer.connect(hostId);

    PeerXmn.handleIncomingMessages();
  }

  static handleIncomingMessages() {

    PeerXmn.connection.on('data', (message: FinalMessage) => {
      IncomingMessageService.receive(message);
    });
  }

  static sendMessage(message: FinalMessage) {

    PeerXmn.connection.send(message);
  }
}