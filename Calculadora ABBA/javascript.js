function calcular() {
    // Obter os valores dos campos do formulário
    var peso = parseFloat(document.getElementById("massa").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var temperatura = parseFloat(document.getElementById("temperatura").value);

    // Função para Realizar os cálculos
    var resultadoPeso = peso * 9.8; // Cálculo de peso
    var resultadoComprimento = comprimento / 100; // Cálculo de comprimento
    var resultadoTemperatura = (temperatura * 1.8) + 32; // Cálculo de temperatura

    // Exibir os resultados
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Resultados:</h2>";
    resultadoDiv.innerHTML += "<p>Peso: " + resultadoPeso + " kg</p>";
    resultadoDiv.innerHTML += "<p>Comprimento: " + resultadoComprimento + " m</p>";
    resultadoDiv.innerHTML += "<p>Temperatura: " + resultadoTemperatura + " °F</p>";
}