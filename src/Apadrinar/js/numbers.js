function validateNumericInput(input) {
    // Reemplazar cualquier carácter que no sea un dígito numérico con una cadena vacía
    input.value = input.value.replace(/\D/g, '');
    const numericValue = parseFloat(input.value);
    if (!isNaN(numericValue)) {
        input.value = formatNumberToCurrency(numericValue);
    }
}

function formatNumberToCurrency(value) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(value);
}
