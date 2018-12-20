import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

//import {AppRoutingModule, routingComponents} from './app-routing.module';
import {UIRouterModule} from "@uirouter/angular";
import { APP_STATES } from './app.states';
import { AppComponent } from './app.component';
import { MainComponent } from '../pages/main/main.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { PageNotFoundComponent } from '../pages/PageNotFound/PageNotFound.component';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: '/Main' }
    }),
    BrowserModule
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: '/sites/devsite'
  }
],
  entryComponents: [
    AppComponent,
    MainComponent,
    SettingsComponent,
    PageNotFoundComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  public ngDoBootstrap() {
    if(!customElements.get("app-pmeika")) {
      const AppElement = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('app-pmeika', AppElement);
    }
   }
}

