import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Push } from '@ionic-native/push/ngx';
import { CautraloiPage } from './page/cautraloi/cautraloi.page';
import { UpdateprofilestaffPage } from './page/updateprofilestaff/updateprofilestaff.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
import { HttpModule } from '@angular/http';
import { HttpClientModule, } from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Network } from '@ionic-native/network/ngx';
import { UpdatepassPage } from './page/updatepass/updatepass.page';
import { NhatkycanthiepWorkPage } from './page/nhatkycanthiep-work/nhatkycanthiep-work.page';
import { UpdateexpertPage } from './page/updateexpert/updateexpert.page';
import { UpdateteacherparentPage } from './page/updateteacherparent/updateteacherparent.page';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { IonicStorageModule } from '@ionic/storage';
import { MessageConfirmPage } from './page/message-confirm/message-confirm.page';
import { SendmailasqPage } from './page/sendmailasq/sendmailasq.page';
import { SendmailcdcPage } from './page/sendmailcdc/sendmailcdc.page';
import { SendmailatecPage } from './page/sendmailatec/sendmailatec.page';
import { SendmailmqolPage } from './page/sendmailmqol/sendmailmqol.page';
import { SendmailmchatrPage } from './page/sendmailmchatr/sendmailmchatr.page';
import { SendmailmchatrfPage } from './page/sendmailmchatrf/sendmailmchatrf.page';
import { SendmailasqguestPage } from './page/sendmailasqguest/sendmailasqguest.page';
import { SendmailmchatrguestPage } from './page/sendmailmchatrguest/sendmailmchatrguest.page';
import { SwipeModule } from './swipe/swipe.module';
import { GoiyasqPage } from './page/goiyasq/goiyasq.page';
import { NhanxetasqPage } from './page/nhanxetasq/nhanxetasq.page';
import { GoiyasqguestPage } from './page/goiyasqguest/goiyasqguest.page';
import { DashBoardP2Page } from './page/dash-board-p2/dash-board-p2.page';
import { DashbpadteacherP2Page } from './page/dashbpadteacher-p2/dashbpadteacher-p2.page';
import { DashbpadparentP2Page } from './page/dashbpadparent-p2/dashbpadparent-p2.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { SendmailActivatedPage } from './page/sendmail-activated/sendmail-activated.page';

declare var require: any;
export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    NhatkycanthiepWorkPage,
    CautraloiPage,
    UpdateprofilestaffPage,
    UpdatepassPage,
    UpdateteacherparentPage,
    UpdateexpertPage,
    MessageConfirmPage,
    SendmailasqPage,
    SendmailcdcPage,
    SendmailatecPage,
    SendmailmqolPage,
    SendmailmchatrPage,
    SendmailmchatrfPage,
    SendmailasqguestPage,
    SendmailmchatrguestPage,
    SendmailActivatedPage,
    GoiyasqPage,
    GoiyasqguestPage,
    NhanxetasqPage,
    DashBoardP2Page,
    DashbpadteacherP2Page,
    DashbpadparentP2Page,
  ],
  entryComponents: [
    CautraloiPage,
    UpdateprofilestaffPage,
    UpdatepassPage,
    NhatkycanthiepWorkPage,
    UpdateteacherparentPage,
    UpdateexpertPage,
    MessageConfirmPage,
    SendmailasqPage,
    SendmailcdcPage,
    SendmailatecPage,
    SendmailmqolPage,
    SendmailmchatrPage,
    SendmailmchatrfPage,
    SendmailasqguestPage,
    SendmailmchatrguestPage,
    SendmailActivatedPage,
    GoiyasqPage,
    GoiyasqguestPage,
    NhanxetasqPage,
    DashBoardP2Page,
    DashbpadteacherP2Page,
    DashbpadparentP2Page
  ],
  imports: [
    ChartModule,
    SwipeModule,
    CommonModule,
    FormsModule,
    IonicSelectableModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    // EventsModule.forRoot()
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Push,
    NativeStorage,
    Network,
    InAppBrowser,
    Facebook,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
