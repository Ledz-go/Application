import {ILight} from './light';
import {Light} from '../classes/light';

export interface IRoom {
  id: string;
  name: string;
  lights: Light[];
}
