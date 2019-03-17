function fatorial1(n: number): number {
    if (n < 0) {
        throw new Error('Número inválido');
    } 
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1
    }
    else {
        return fatorial(n - 1) * n
    }
}        
        
console.log(fatorial(5));