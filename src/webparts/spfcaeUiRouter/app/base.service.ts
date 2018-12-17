import { Injectable,OnInit } from '@angular/core';
import { sp } from "@pnp/sp";
@Injectable({
  providedIn: 'root',
})

export class BaseService implements OnInit {

  constructor() {
    //console.log(this);
    // sp.setup({
    //   spfxContext: this.context
    // });
  }

  public ngOnInit() {  
  }

  public getByTitle(listName: any){
    var promise = new Promise((resolve, reject) => {
      if(listName!==null&&listName!==undefined){
        sp.web.lists.getByTitle("TestList").items.get().then((items: any[]) => {
            if(items !== null && items !== undefined){
              resolve(items);
            }
            else{
              reject("Error")
            }
        });
      }
    });
    return promise;   
  }

  public getById(){

  }

  public post(){

  }

  public update(){

  }

  public delete(){

  }

}