export class Cadrasto{
    constructor(
        public nome:string,
        public sobrenome:string,
        public idade:Number
    ){}

    public getNome():string{
        return this.nome;
    }

    public setNome(nome:string):void {
        this.nome = nome;
    }

    public getSobrenome():string{
        return this.sobrenome;
    }

    public setSobrenome(sobrenome:string):void {
        this.sobrenome = this.sobrenome;
    }

    public getIdade():Number{
        return this.idade;
    }

    public setIdade(nome:Number):void {
        this.idade = this.idade;
    }

    cadrastar(nome:string, sobrenome:string, idade:Number):void{
     console.log("Sua idade", this.idade)
    }
}

export interface Apressentar extends Cadrasto{
   cadrastar():void
}







