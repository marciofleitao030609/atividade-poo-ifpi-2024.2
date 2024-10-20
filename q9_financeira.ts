class SituacaoFinanceira {
    valorCreditos: number = 10000;
    valorDebitos: number = 1500.50;

    calcularSaldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }

}

const valorFinal = new SituacaoFinanceira();

console.log(`O valor presente em sua conta é ${valorFinal.calcularSaldo()}`);
