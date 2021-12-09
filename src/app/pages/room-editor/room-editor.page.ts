import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhotoService} from '../../services/photo.service';
import {Photo} from '../../interfaces/photo';
import {IRoom} from '../../interfaces/room';
import {RoomsService} from '../../services/rooms.service';
import {NetworkService} from '../../services/network.service';
import {Plug} from '../../interfaces/Plug';
import {PopoverController} from '@ionic/angular';
import {TooltipComponent} from '../../components/tooltip/tooltip.component';

@Component({
  selector: 'app-room-editor',
  templateUrl: './room-editor.page.html',
  styleUrls: ['./room-editor.page.scss'],
})
export class RoomEditorPage implements OnInit {
  public index = 0;
  public photo: Photo;
  public room: IRoom;
  public plugs: Plug[]; // unassigned plugs

  public popover: HTMLIonPopoverElement;

  constructor(
    private route: ActivatedRoute,
    public photoService: PhotoService,
    public roomService: RoomsService,
    public networkService: NetworkService,
    public popoverController: PopoverController,
  ) {
  }

  async ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.index = +params.get('index');
      this.photo = this.photoService.photos[this.index];
      this.room = this.roomService.rooms[this.index];
      this.plugs = this.networkService.getNetwork();
      console.log(this.plugs);
    });
  }

  async presentPopover(event: any, text: string) {
    this.popover = await this.popoverController.create({
      component: TooltipComponent,
      event,
      componentProps: {
        text,
      }
    });
    await this.popover.present();
  }

}
