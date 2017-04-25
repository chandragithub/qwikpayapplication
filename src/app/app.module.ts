import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingPage } from '../pages/setting/setting';
import { AddChildWorkflowPage } from '../pages/addChildWorkflow/addChildWorkflow';
import { FeeInfoPage } from '../pages/feeInfo/feeInfo';

import { SchoolListDB } from '../services/db/schoolList';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    AddChildWorkflowPage,
    FeeInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    AddChildWorkflowPage,
    FeeInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SchoolListDB,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
