function calcularCostoEnvio() {
    do {
        var codigoPostal = prompt("Por favor, ingrese su código postal:");
        if (codigoPostal === null || codigoPostal === "") {
            alert("No se ingresó ningún código postal. Por favor, inténtelo nuevamente.");
            continue;
        }
        var codigoPostalNum = parseInt(codigoPostal);
        if (codigoPostalNum > 0 && codigoPostalNum <= 2000) {
            alert("El costo de envío es $500.");
            return;
        } else if (codigoPostalNum > 2000 && codigoPostalNum <= 3000) {
            alert("El costo de envío es $1000.");
            return;
        } else if (codigoPostalNum > 3000) {
            alert("Lamentablemente no tenemos entrega en ese lugar por ahora. Consulte nuevamente más adelante.");
            return;
        } else {
            alert("Código postal no válido. Por favor, inténtelo nuevamente.");
        }
    } while (true);
}

calcularCostoEnvio();
