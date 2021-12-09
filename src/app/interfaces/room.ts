import {Light} from '../classes/light';
import {Photo} from './photo';

export interface IRoom {
  id: number;
  name: string;
  photo: Photo;
  lights: Light[];
}
