import {Injectable} from '@angular/core';
import {Plug} from '../interfaces/Plug';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  public plugs: Plug[] = [];
  public unknownPlugs: Partial<Plug>[] = [];

  constructor(
    private messageService: MessageService
  ) {
  }

  async fetchPlugs() {
    const {Data} = await this.messageService.fetchPlugs();
    if (Data.Type === 'Discovery Answer') {
      const NodeList = Data.NodeList;
      NodeList.forEach(node => {
        this.unknownPlugs.push({
          fixtureId: node,
          model: 'unknown',
          connectionState: true,
        })
      })
    }
  }

  definePlug(plug: Plug) {
    console.log(this.unknownPlugs)
    this.unknownPlugs = this.unknownPlugs.filter(p => p.fixtureId !== plug.fixtureId);
    console.log(this.unknownPlugs)

    this.plugs.push(plug);
  }

  getNetwork(): Plug[] {

    this.plugs = [
      //   {
      //   fixtureId: 1,
      //   model: 'Starvill PAR56 RGB', //The name of the model that should corresponf to a model in the library
      //   channels: [1,2,3,4], //The name of each channel in order, and the good amount of channels
      //   connectionState: true, //L'etat de connection TCP
      // }, {
      //   fixtureId: 2,
      //   model: 'Starvill2 PAR56 RGB', //The name of the model that should corresponf to a model in the library
      //   channels: [1,2,3,4], //The name of each channel in order, and the good amount of channels
      //   connectionState: true, //L'etat de connection TCP
      // }
    ];
    this.unknownPlugs = [{
      fixtureId: 3,
      model: 'Starvill3 PAR56 RGB', //The name of the model that should corresponf to a model in the library
      channels: [1, 2, 3, 4], //The name of each channel in order, and the good amount of channels
      connectionState: true, //L'etat de connection TCP
    },]
    return this.plugs;
  }
}
