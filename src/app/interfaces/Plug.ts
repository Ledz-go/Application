export interface Plug {
  fixtureId: number;
  model: string; //The name of the model that should corresponf to a model in the library
  channels: number[]; //The name of each channel in order; and the good amount of channels
  connectionState: boolean; //L'etat de connection TCP
}
