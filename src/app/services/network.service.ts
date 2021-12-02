import {Injectable} from '@angular/core';
import {Plug} from '../interfaces/Plug';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  public plugs: Plug[] = [];

  constructor() {
  }

  getNetwork(): Plug[] {
    this.plugs = [{
      fixtureId: 1,
      model: 'Starvill PAR56 RGB', //The name of the model that should corresponf to a model in the library
      channels: ['R', 'G', 'B', 'F'], //The name of each channel in order, and the good amount of channels
      connectionState: true, //L'etat de connection TCP
    }, {
      fixtureId: 2,
      model: 'Starvill PAR56 RGB', //The name of the model that should corresponf to a model in the library
      channels: ['R', 'G', 'B', 'F'], //The name of each channel in order, and the good amount of channels
      connectionState: true, //L'etat de connection TCP
    },];
    return this.plugs;
  }
}
