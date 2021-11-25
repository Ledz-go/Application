import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomEditorPageRoutingModule } from './room-editor-routing.module';

import { RoomEditorPage } from './room-editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomEditorPageRoutingModule
  ],
  declarations: [RoomEditorPage]
})
export class RoomEditorPageModule {}
