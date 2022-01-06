import {Photo} from './photo';
import {Plug} from './Plug';

export interface IRoom {
  id: number;
  name: string;
  photo: Photo;
  plugs: Plug[];
}
