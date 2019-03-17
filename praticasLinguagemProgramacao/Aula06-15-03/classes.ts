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

let shapes: forma[];
shapes = new Array();
shapes.push(new circulo(3));
shapes.push(new circulo(5));
shapes.push(new quadrado(4));

shapes.forEach(shapeItem => {
    console.log(shapeItem.nome + ": " + shapeItem.area());
});