let calculatorOn = true; // Estado inicial da calculadora

    function toggleCalculator() {
    const powerButton = document.getElementById('powerButton');
    const buttons = document.querySelectorAll('.calculator button:not(#powerButton)');
    
    // Alterna o estado da calculadora
    calculatorOn = !calculatorOn;
    
    // Se a calculadora estiver ligada
    if (calculatorOn) {
        // Altera o texto do botão de volta para "OFF"
        powerButton.innerText = 'OFF';
        // Remove a cor de fundo preta
        powerButton.style.backgroundColor = '';
        // Ativa todos os outros botões
        buttons.forEach(button => button.disabled = false);
    
    // Se a calculadora estiver desligada
    } else {
        // Altera o texto do botão para "ON"
        powerButton.innerText = 'ON';
        //Define a cor de fundo preta
        powerButton.style.backgroundColor = 'black';
        powerButton.style.color = 'white'
        // Desativa todos os outros botões
        buttons.forEach(button => button.disabled = true);
        
    }
}

// Função para adicionar texto ao visor
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Função para dar acção ao botons dos operadores
function calculate(value) {
    document.getElementById("display").value += value;
}

// Função para calcular e exibir o resultado
function calculateResultado() {
    var expression = document.getElementById("display").value;
    var result = eval(expression);
      
    document.getElementById("display").value = result;
      
    // Adiciona o cálculo ao histórico
    historicoCalculos.push(expression + " = " + result); 
    
}

// Função para limpar o visor
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Função para deletar o último dígito
function DeleteDisplay() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}

// Função para desligar a calculadora
function offDisplay() {
    clearDisplay(); // Limpa o visor
    var buttons = document.getElementsByClassName("buttons")[0].getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; // Desabilita todos os botões
    }
}

// Variável para armazenar o valor na memória
let memoryValue = null;

// Função para salvar o valor do display na memória
function saveToMemory() {
  let displayValue = document.getElementById('display').value;
  memoryValue = displayValue;
}

// Função para recuperar o valor da memória e exibi-lo no display
function recallFromMemory() {
  if (memoryValue !== null) {
    document.getElementById('display').value = memoryValue;
  }
}

let historicoCalculos = []; // Array para armazenar os cálculos  

function mostrarHistorico() {
    const historicoDiv = document.getElementById("historicoDiv");
    historicoDiv.innerHTML = ""; // Limpa o conteúdo anterior
    
    const historicoList = document.createElement("ul"); // Cria uma lista não ordenada
    
    historicoCalculos.forEach((calculo, index) => {
        const historicoItem = document.createElement("li"); // Cria um item da lista
        
        if (calculo.includes("trig")) {
            historicoItem.textContent = `Cálculo ${index + 1} (Trig): ${calculo}`;
          } else if (calculo.includes("fact")) {
            historicoItem.textContent = `Cálculo ${index + 1} (Fact): ${calculo}`;
          } else {
            historicoItem.textContent = `Cálculo ${index + 1}: ${calculo}`;
        }

        historicoList.appendChild(historicoItem); // Adiciona o item à lista
    });

    historicoDiv.appendChild(historicoList); // Adiciona a lista à div do histórico
}

// Funções trigonométricas
function calculateTrigonometria(operation) {
    var expression = document.getElementById("display").value;
    var result;

    if (expression === "") {
        document.getElementById("display").value = "";
        return;
    }

    switch(operation) {
        case 'sin':
            result = Math.sin(eval(expression));
            break;
        case 'cos':
            result = Math.cos(eval(expression));
            break;
        case 'tan':
            result = Math.tan(eval(expression));
            break;
        case 'log':
            result = Math.log10(eval(expression));
            break;
        case 'sqrt':
            result = Math.sqrt(eval(expression));
            break;
        case '%':
            result = eval(expression) / 100;
            break;
        default:
            return;
    }

    document.getElementById("display").value = result;

    // Adiciona o cálculo ao histórico
    historicoCalculos.push(expression + " = " + result); 
}

//Função Factorial
function calculateFactorial() {
    let num = parseInt(document.getElementById("display").value);
    
    let resultado = 1;

    // Verifica se o número é válido (não negativo)
    if (num < 0 || !Number.isInteger(num)) {
        alert("Por favor, insira um número inteiro não negativo para calcular o fatorial.");
        return;
    }

    // Calcula o fatorial
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }

    // Exibe o resultado
    document.getElementById("display").value = resultado;

    historicoCalculos.push(expression + " = " + resultado); // Adiciona o cálculo ao histórico
}

function abrirCalculoPesoMedidas() {
    window.location.href = "calculo_peso_medidas.html";
}