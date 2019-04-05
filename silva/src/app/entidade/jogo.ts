export class Jogo{
  private nome: string;
  private console : string;

    getNome():string {
      return this.nome;
    }
    setNome(nome:string) : void{
      this.nome = nome;
    }

    getConsole():string {
      return this.console;
    }
    setConsole(console:string):void {
      this.console = console;
    }

}
