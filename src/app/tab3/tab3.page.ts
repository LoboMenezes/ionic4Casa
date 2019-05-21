import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    public contatos:Array<object> = [];

    constructor(){
      this.contatos = [
        
        {
          "nome":"bruno",
          "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/avatar-ts-woody.png",
          "msg":"Eaee, galeraa!",
        },
        {
          "nome":"michel",
          "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/avatar-ts-buzz.png",
          "msg":"fala cmg!",
        },
        {
          "nome":"maria",
          "img": "https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/avatar-ts-jessie.png",
          "msg":"I love programar",
        },
    ]
    
}

}
