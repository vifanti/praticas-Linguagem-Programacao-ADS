class forma {
    nome: string;
    
    constructor(nome: string){
        this.nome = nome;
    }

    area(): number {
        return 0;
    }
}

class circulo extends forma {
    raio: number;

    constructor(raio: number){
        super("circulo");
        this.raio = raio;
    }

    area(): number {
        return 3.14 * this.raio * this.raio;
    }
}

class quadrado extends forma {
    lado: number;

    constructor(lado: number){
        super("quadrado");
        this.lado = lado;
    }

    area(): number {
        return this.lado * this.lado;
    }
}

let formas: forma[];
formas = new Array();
formas.push(new circulo(3));
formas.push(new circulo(5));
formas.push(new quadrado(4));

formas.forEach(itemFormas => {
    console.log(itemFormas.nome + ": " + itemFormas.area());
});