import { Component,Injectable,Input,Output   } from '@angular/core';

@Component({
    selector: 'app-main',
    template: require('./main.component.html')
  })

  export class MainComponent  {
    public data: any[];

    @Input() public heroes = [
      {id: 1, name:'Superman'},
      {id: 2, name:'Batman'},
      {id: 5, name:'BatGirl'},
      {id: 3, name:'Robin'},
      {id: 4, name:'Flash'}
    ];

    constructor(){
      this.data = this.heroes;
      console.log(JSON.stringify(this.data));
    }
  }