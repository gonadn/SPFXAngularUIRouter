import {
  Component, 
  Input,
  Output,} from '@angular/core';
 // import { ActivatedRoute } from '@angular/router';
  //import {Router} from "@angular/router"
import { sp } from "@pnp/sp";
import {BaseService} from "./base.service"
  @Component({
    selector: 'app-root',
    template: require('./app.component.html')
  })  

  export class AppComponent { 
    //@Output()
    public data: any[];

    public heroes = [
      {id: 1, name:'Superman'},
      {id: 2, name:'Batman'},
      {id: 5, name:'BatGirl'},
      {id: 3, name:'Robin'},
      {id: 4, name:'Flash'}
    ];
    constructor(){
      this.data = this.heroes;
    }
  }