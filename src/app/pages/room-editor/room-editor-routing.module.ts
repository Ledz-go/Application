import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomEditorPage } from './room-editor.page';

const routes: Routes = [
  {
    path: '',
    component: RoomEditorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomEditorPageRoutingModule {}
