import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ChappePageRoutingModule} from './chappe-routing.module';

import {ChappePage} from './chappe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChappePageRoutingModule
  ],
  declarations: [ChappePage]
})
export class ChappePageModule {
}
