import { Component } from '@angular/core';
@Component({
    selector: 'henrique-component',
    templateUrl: './henrique.component.html',
    styleUrls: ['./henrique.component.css']
})

export class HenriqueComponent{
  nome : string = 'Henrique Silva'

  mensagem() : void{
    alert: "Você clicou";
  }
}
