import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';
import { Injectable,OnInit } from '@angular/core';
import { sp } from "@pnp/sp";
import {
  Environment,
  EnvironmentType
 } from '@microsoft/sp-core-library';
 
@Injectable({
  providedIn: 'root',
})

export class BaseService implements OnInit {
  public context: IWebPartContext;
  constructor() {
    //this.context;
    // sp.setup({
    //   spfxContext: this.context
    // });
  }

  ngOnInit(){
    console.log(this.context);
  }
  // public onInit(): Promise<void> {

  //   console.log(this.context.pageContext.web.absoluteUrl);

  //   return Promise.resolve<void>();
  // }

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