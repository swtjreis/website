// validar CPF
function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        alert('CPF inválido.');
        return false;
    }

    for (let t = 9; t < 11; t++) {
        let d = 0;
        for (let c = 0; c < t; c++) {
            d += cpf[c] * ((t + 1) - c);
        }
        d = (10 * d) % 11 % 10;
        if (cpf[t] != d) {
            alert('CPF inválido.');
            return false;
        }
    }

    alert('CPF válido.');
    return true;
}
