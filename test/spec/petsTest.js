describe('Tests for the operation of the inputs', () => {
    it('You should transform the format of the number to Colombian currency', () => {
         const valor = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(1000);
        const resultado = formatNumberToCurrency(1000);
        expect(resultado).toBe(valor);
    });
  });   