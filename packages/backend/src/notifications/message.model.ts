export enum MessageTypes {
  NEW_VIDEO = 'newVideo',
  NEW_PLAYLIST = 'newPlaylist',
}

export enum TokenTypes {
  HMS = 'HmsTokens',
  FIREBASE = 'firebaseTokens',
}

export type ITokenType = TokenTypes.FIREBASE | TokenTypes.HMS;

export type IMessageType = MessageTypes.NEW_VIDEO | MessageTypes.NEW_PLAYLIST;

export interface IMessage {
  title: string;
  body: string;
}

export interface IMessageData {
  messageType: IMessageType;
  data?: any;
}

export interface IHmsMessage {
  titleMessage: string;
  pushMessage: string;
}
