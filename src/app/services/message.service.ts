import {Injectable} from '@angular/core';
import {Message} from "../interfaces/message";
import {Plug} from "../interfaces/Plug";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  header = {
    Version: 1, //The version of the system
    SessionID: 1, //The ID of the session
    Timestamp: new Date().toString()
  }

  constructor() {
  }

  sendMessage(message: Message): Message {
    console.log(message);
    return message;
  }

  async fetchPlugs(): Promise<Message> {
    const request: Message = {
      ...this.header,
      Data: {Type: 'Discovery'} //indicates that the master wants to know who he is
    }
    return this.sendMessage(request);
  }

  async command(plug: Plug, channels: number[]): Promise<Message> {
    const request: Message = {
      ...this.header,
      Data: {
        Type: 'Command',
        FixtureID: plug.fixtureId,
        Channels: channels,
      },
    }
    return this.sendMessage(request);
  }

  async terminate(): Promise<Message> {
    const request: Message = {
      ...this.header,
      Data: {Type: 'Terminate'}
    }
    return this.sendMessage(request);
  }
}
