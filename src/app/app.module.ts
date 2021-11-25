import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data-service.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100}) : []],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ScreenOrientation,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
