import {ILight} from '../interfaces/light';

export class Light implements ILight{
  color: { r: number; g: number; b: number };

  constructor(public ip: string) {
    this.color = {
      r: 0,
      g: 0,
      b: 0
    };
  }
  updateColor(r: number, g: number, b: number){
    this.color.r = r;
    this.color.g = g;
    this.color.b = b;
  }
}
