import { Jogo } from '../entidade/jogo';
import { Injectable } from '@angular/core';
@Injectable()
export class ServicoJogos{
  listaJogo = new Array<Jogo>();

  adicionar(jogo: Jogo) : void {
    this.listaJogo.push(jogo);
  }

  excluir(i:number) : void {
    this.listaJogo.splice(i,1);
  }

  alterar(i:number) : void{
    this.jogo = this.listaJogo[i];
    this.listaJogo.splice(i,1);
  }

  detalhar(i:number): void{
      this.jogo = this.listaJogo[i];
  }
}
