import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public bemvindo:string = "Bem Vindo";
  public lista:Array<string> = ['teste','teste1','teste2','teste3'];
  public listaAny:Array<any> = ['teste', 10 , true];

}
