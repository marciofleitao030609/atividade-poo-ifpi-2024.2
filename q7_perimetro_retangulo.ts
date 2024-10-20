class retangulo {
    l1: number = 2;
    l2: number = 10;

    calcularArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number {
        return (2 * this.l1) + (2 * this.l2);
    }
       
}

const polRetangulo = new retangulo();

console.log(`O valor da área do retângulo é ${polRetangulo.calcularArea()}`);
console.log(`O valor do perímetro do retângulo é ${polRetangulo.calcularPerimetro()}`);
