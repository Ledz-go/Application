export interface Message {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Version: number;
  SessionID: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Timestamp: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Data: Data;
}

// export interface Data {
//   // eslint-disable-next-line @typescript-eslint/naming-convention
//   Type: 'Discovery' | 'Discovery Answer' | 'Function' | 'Function Creation' | 'Command' | 'Terminate';
//   // eslint-disable-next-line @typescript-eslint/naming-convention
//   Name?: string;
//   // eslint-disable-next-line @typescript-eslint/naming-convention
//   Sequence?: Sequence[];
//   // eslint-disable-next-line @typescript-eslint/naming-convention
//   FixtureID?: number;
//   // eslint-disable-next-line @typescript-eslint/naming-convention
//   Channels?: number[];
// }

// type Data = {
//   Discovery: keyof DiscoveryMessage;
//   DiscoveryAnswer: keyof DiscoveryAnswer;
//   Function: keyof FunctionMessage;
//   Command: keyof Command;
//   Terminate: keyof TerminateMessage;
// }

// type Data = {
//   Discovery: DiscoveryMessage;
//   DiscoveryAnswer: DiscoveryAnswer;
//   Function: FunctionMessage;
//   Command: Command;
//   Terminate: TerminateMessage;
// };

type Data =
  | DiscoveryAnswer
  | DiscoveryMessage
  | FunctionMessage
  | CommandMessage
  | TerminateMessage;

export interface DiscoveryAnswer {
  Type: 'Discovery Answer';
  NodeList: number[];
}

export interface DiscoveryMessage {
  Type: 'Discovery';
}

export interface FunctionMessage {
  Type: 'Function';
  Sequence: Sequence[];
}

export interface Sequence {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Time: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Commmands: Command[];

}

export interface Command {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NodeId: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Command: number[];
}

export interface CommandMessage {
  Type: 'Command';
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FixtureID: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Channels: number[];
}

export interface TerminateMessage {
  Type: 'Terminate';
}
