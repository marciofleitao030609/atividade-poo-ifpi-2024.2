class circulo {
    raio: number = 10;
    pi: number = 3.14;

    calcularArea(): number {
        return this.pi * this.raio**2;
    }

    calcularPerimetro(): number {
        return 2 * this.pi * this.raio;
    }
       
}

const polCirculo = new circulo();

console.log(`O valor da área do retângulo é ${polCirculo.calcularArea()}`);
console.log(`O valor do perímetro do retângulo é ${polCirculo.calcularPerimetro()}`);
