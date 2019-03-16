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