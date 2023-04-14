export interface IMessage {
  id: number;
  text: string;
  isDecrypted: boolean;
}

export interface IMessages {
  messages: IMessage[];
}

export interface INewMessage {
  message: string;
  type: 'cesar' | 'xor';
  key: number | string;
}

export interface IResponseMessage {
  id: number;
  text: string;
}

export interface IResponseMessages {
  messages: IResponseMessage[];
}

export interface IResponseToken {
  accessToken: string;
}
