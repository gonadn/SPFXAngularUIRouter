import { NgModule } from '@angular/core';
import {UIRouterModule,UIRouter} from "@uirouter/angular";

import { MainComponent } from '../pages/main/main.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { PageNotFoundComponent } from '../pages/PageNotFound/PageNotFound.component';

const states = [
  { name: 'Main', url: '/main', component: MainComponent },
  { name: 'Settings', url:'/settings', component: SettingsComponent },
  { name: '**', url:'/PageNotFound', component: MainComponent }
];

export const APP_STATES = states;