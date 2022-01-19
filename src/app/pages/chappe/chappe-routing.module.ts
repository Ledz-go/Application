import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChappePage} from './chappe.page';

const routes: Routes = [
  {
    path: '',
    component: ChappePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChappePageRoutingModule {
}
