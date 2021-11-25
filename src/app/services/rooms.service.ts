import { Injectable } from '@angular/core';
import {IRoom} from '../interfaces/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  public rooms: IRoom[];

  constructor() {
    this.rooms = [];
  }

  /**
   * fetch rooms and nodes from the cluster and store them in rooms attribute
   */
  fetchRooms(){
    throw new Error('Not implmented');
  }

  getRoomsName(){
    return this.rooms.map(room => room.name);
  }

  areRoomsSet(){
    return this.rooms === [];
  }

}
