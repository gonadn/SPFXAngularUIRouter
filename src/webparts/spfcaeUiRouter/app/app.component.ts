import {Component} from '@angular/core';
 // import { ActivatedRoute } from '@angular/router';
  //import {Router} from "@angular/router"
import { sp } from "@pnp/sp";

  @Component({
    selector: 'app-root',
    template: require('./app.component.html')
  })  

  export class AppComponent { 
    public test:string;

    constructor(){
      let listName = "TestList";
      this.test = listName;
    }
  }