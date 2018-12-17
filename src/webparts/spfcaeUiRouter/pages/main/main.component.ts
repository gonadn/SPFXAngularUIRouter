import { Component  } from '@angular/core';

@Component({
    selector: 'app-main',
    template: require('./main.component.html')
  })
  
  export class MainComponent  {
    public testData: "Test...";
    public data: any[];
    public heroes = [
      {id: 1, name:'Superman'},
      {id: 2, name:'Batman'},
      {id: 5, name:'BatGirl'},
      {id: 3, name:'Robin'},
      {id: 4, name:'Flash'}
    ];
    public test:string;

    constructor(){
      let t = "main page...";
      this.test = t;
      this.data = this.heroes;
      console.log(JSON.stringify(this.data));
    }
  }