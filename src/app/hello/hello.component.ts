import {Component} from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{
    nome: string;
    clientes: Clientes[];

    constructor(){
        this.nome = 'Gabriel';
        let cliente1 = new Clientes('Gabriel', 20);
        let cliente2 = new Clientes('Nelson', 31);
        this.clientes = [cliente1, cliente2];
    }
    // or nome: string = 'Gabriel'
}


class Clientes{
    constructor(
        public nome: string,
        public id: number
    ){}
}

