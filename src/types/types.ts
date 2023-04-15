export interface IMessage {
  id: number;
  text: string;
  isDecrypted: boolean;
}

export interface IMessages {
  messages: IMessage[];
}

export interface INewMessage {
  text: string;
  type: 'cesar' | 'xor';
  key: number | string;
}

export interface IResponseMessage {
  id: string;
  text: string;
}

export interface IResponseMessages {
  messages: IResponseMessage[];
}

export interface IResponseAuth {
  accessToken: string;
  email: string;
}

export interface IResponseEmail {
  email: string;
}
