let ecra = document.getElementById('valor');
let ecra2 = document.getElementById('valor2');

function pegar(valor){
    ecra2.innerHTML= ecra.innerHTML === '0' ?valor:ecra.innerHTML + valor;
    ecra.innerHTML= ecra.innerHTML === '0' ?valor:ecra.innerHTML + valor;
    
}

function calcular(){
    ecra.innerHTML = ecra.innerHTML.replace(',', '.');
    ecra.innerHTML = ecra.innerHTML.replace('x', '*');
    ecra.innerHTML = ecra.innerHTML.replace('mod', '%');
    ecra.innerHTML = ecra.innerHTML.replace('^', '**');
    var ter = ecra.innerHTML;
    ecra.innerHTML = eval(ecra.innerHTML);
    atualiza();

    historico.push(ecra.innerHTML);

    $('#valor2').html("");
    vaiMudar = true;
    historico.push("<h5>" +ter +"="+ ecra.innerHTML + "</h5>");
    localStorage.setItem("historico", historico);
    var historicoLocal = localStorage.getItem("historico");
    while (historicoLocal.includes(','))
        historicoLocal = historicoLocal.replace(',', '<br>');
    $('#div-historico').html(historicoLocal);
}


var vaiMudar = false, cont, valor, historico = Array(), memoria = Array(), fe = false, hyp = false; deg = "deg";

function atualiza() {
    $(this).css('background-color', '#c0c0c0ff');
    valor = $('#valor').text();
    valor = valor.replace(',', '.');
    setTimeout(function () {
        $('.col').css('background-color', '#f0f0f0ff');
        $('.numeros').css('background-color', '#fafafaff');
    }, 100);
    $('.col').hover(function () {
        $(this).css('background-color', '#d8d8d8ff');
    }, function () {
        $(this).css('background-color', '#f0f0f0ff');
    });
    $('.numeros').hover(function () {
        $(this).css('background-color', '#d8d8d8ff');
    }, function () {
        $(this).css('background-color', '#fafafaff');
    });
};

$(document).on('click', '#exportar', function() {
    var resultado = $('#div-historico').text(); // Obtenha o resultado atual
  
    // Copie o resultado para a área de transferência
    navigator.clipboard.writeText(resultado)
      .then(function() {
        alert('Resultado copiado para a área de transferência!');
      })
      .catch(function(error) {
        console.error('Erro ao copiar o resultado:', error);
      });
  
    // Crie um link de download para o resultado
    var downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(resultado);
    downloadLink.download = 'resultado.txt';
    downloadLink.style.display = 'none';
  
    // Adicione o link ao corpo da página e clique nele para iniciar o download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });

  
$(document).on('click', '#c', function () {
    atualiza();
    $('#valor').html('0');
    $('#valor2').html('');
});

$(document).on('click', '#backspace', function () {
    atualiza();
    if (valor != "0" && valor.length != 1)
        $('#valor').html(valor.substring(0, valor.length - 1).replace('.', ','));
    else if ($('#valor').text() == "" || $('#valor').text() == "-" || valor.length == 1)
        $('#valor').html("0");
});


$(document).on('click', '#xquad', function () {
    atualiza();
    xquad = Math.pow(parseFloat(valor), 2);
    $('#valor').html(xquad.toString().replace('.', ','));
});

$(document).on('click', '#elevado', function () {
    atualiza();
    $('#valor2').html($('#valor2').text() + $('#valor').text() + " ^ ");
    vaiMudar = true;
});

$(document).on('click', '#absoluto', function () {
    atualiza();
    sen = Math.abs(parseFloat(valor));
    $('#valor').html(sen.toString().replace('.', ','));
});

$(document).on('click', '#sen', function () {
    atualiza();
    sen = Math.sin(parseFloat(valor));
    $('#valor').html(sen.toString().replace('.', ','));
});

$(document).on('click', '#cos', function () {
    atualiza();
    cos = Math.cos(parseFloat(valor));
    $('#valor').html(cos.toString().replace('.', ','));
});

$(document).on('click', '#tan', function () {
    atualiza();
    tan = Math.tan(parseFloat(valor));
    $('#valor').html(tan.toString().replace('.', ','));
});

$(document).on('click', '#sen1', function () {
    atualiza();
    sen = Math.pow(Math.sin(parseFloat(valor)), -1);
    $('#valor').html(sen.toString().replace('.', ','));
});

$(document).on('click', '#cos1', function () {
    atualiza();
    cos = Math.pow(Math.cos(parseFloat(valor)), -1);
    $('#valor').html(cos.toString().replace('.', ','));
});

$(document).on('click', '#tan1', function () {
    atualiza();
    tan = Math.pow(Math.tan(parseFloat(valor)), -1);
    $('#valor').html(tan.toString().replace('.', ','));
});

$(document).on('click', '#raiz', function () {
    atualiza();
    raiz = Math.sqrt(parseFloat(valor));
    $('#valor').html(raiz.toString().replace('.', ','));
});

$(document).on('click', '#dezax', function () {
    atualiza();
    dezax = Math.pow(10, parseFloat(valor));
    $('#valor').html(dezax.toString().replace('.', ','));
});

$(document).on('click', '#log', function () {
    atualiza();
    log = Math.log(parseFloat(valor));
    $('#valor').html(log.toString().replace('.', ','));
});

$(document).on('click', '#exp', function () {
    atualiza();
    $('#valor').html($('#valor').text() + ",e+");
});

$(document).on('click', '#mod', function () {
    atualiza();
    $('#valor').html($('#valor').text() + " Mod ");
    vaiMudar = true;
});


$(document).on('click', '#umsobre', function () {
    atualiza();
    umsobre = 1 / parseFloat(valor);
    $('#valor').html(umsobre.toString().replace('.', ','));
});


$(document).on('click', '#ln', function () {
    atualiza();
    ln = Math.log(parseFloat(valor)) / Math.log(2.71828182845904523);
    $('#valor').html(ln.toString().replace('.', ','));
});

$(document).on('click', '#dms', function () {
    atualiza();
    dms = valor.split('.')[0] + "," + (valor.split('.')[1] * 6);
    $('#valor').html(dms);
});


$(document).on('click', '#deg', function () {
    atualiza();
    valorSplit = valor.split('.');
    if ((valorSplit[1] * 16).toString().length > 2)
        deg = (parseInt(valorSplit[0]) + 1) + "," + (valorSplit[1] * 1666666666).substring(1, (valorSplit[1] * 1666666666).toString().length);
    else
        deg = valorSplit[0] + "," + (valorSplit[1] * 1666666666);
    $('#valor').html(deg.toString().replace('.', ','));
});

$(document).on('click', '#pi', function () {
    atualiza();
    $('#valor').html('3,141592653589793');
    vaiMudar = true;
});
$(document).on('click', '#fatorial', function () {
    atualiza();
    if (valor < 0)
        fatorial = "Entrada Inválida";
    else {
        var fatorial = 1;
        for (x = valor; x > 1; x--)
            fatorial = fatorial * x;
    }
    $('#valor').html(fatorial.toString().replace('.', ','));
});

$(document).on('click', '#maismenos', function () {
    atualiza();
    menos = parseFloat(valor) * -1;
    $('#valor').html(menos.toString().replace('.', ','));
});

$(document).on('click', '#virgula', function () {
    atualiza();
    if (!valor.includes('.'))
        $('#valor').html(valor + ",");
});

$(document).on('click', '#deg2', function () {
    if (deg == "deg") {
        deg = "rad";
        this.innerHTML = "RAD";
    }
    else if (deg == "rad") {
        deg = "grad";
        this.innerHTML = "GRAD";
    }
    else {
        deg = "deg";
        this.innerHTML = "DEG";
    }
});

$(document).on('click', '#fe', function () {
    if (fe) {
        fe = false;
        this.style.borderBottom = "none";
    }
    else {
        fe = true;
        this.style.borderBottom = "3px solid red";
    }
});

$(document).on('click', '#hyp', function () {
    if (hyp) {
        hyp = false;
        this.style.borderBottom = "none";
        $('#sen').html("<span>sin</span>");
        $('#cos').html("<span>cos</span>");
        $('#tan').html("<span>tan</span>");
        $('#sen1').html("<span>sin<sup>-1</sup></span>");
        $('#cos1').html("<span>cos<sup>-1</sup></span>");
        $('#tan1').html("<span>tan<sup>-1</sup></span>");
    }
    else {
        hyp = true;
        this.style.borderBottom = "3px solid red";
        $('#sen').html("<span>sinh</span>");
        $('#cos').html("<span>cosh</span>");
        $('#tan').html("<span>tanh</span>");
        $('#sen1').html("<span>sinh<sup>-1</sup></span>");
        $('#cos1').html("<span>cosh<sup>-1</sup></span>");
        $('#tan1').html("<span>tanh<sup>-1</sup></span>");
    }
});


document.addEventListener('keydown', function (evt) {
    atualiza();
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    if (key >= 96 && key <= 105) {
        val = key - 96;
        $('#' + val).click();
    }
    switch (key) {
        case 8:
            $('#backspace').click();
            break;
        case 27:
            $('#c').click();
            break;
        case 188: case 110:
            $('#virgula').click();
            break;
        case 111: case 193:
            $('#dividir').click();
            break;
        case 106:
            $('#multiplicar').click();
            break;
        case 107: case 187:
            $('#somar').click();
            break;
        case 109: case 189:
            $('#subtrair').click();
            break;
        case 13:
            $('#igual').click();
            break;
    }
});


$(document).on('click', '#ms', function () {
    memoria.push($('#valor').text());
    localStorage.setItem("memoria", memoria);
    var memoriaLocal = localStorage.getItem("memoria");
    while (memoriaLocal.includes(','))
        memoriaLocal = memoriaLocal.replace(',', '<br>')
    document.getElementById("div-memoria").innerHTML = memoriaLocal;
    vaiMudar = true;
});

$(document).on('click', '#mc', function () {
    localStorage.setItem("memoria", "");
    document.getElementById("div-memoria").innerHTML = "";
    memoria = Array();
});
$(document).on('click', '#mr', function () {
    var memoriaLocal = localStorage.getItem("memoria");
    memoriaLocal = memoriaLocal.split(',');
    document.getElementById("valor").innerHTML = memoriaLocal[memoriaLocal.length - 1];
    vaiMudar = true;
});

$(document).on('click', '#mMais', function () {
    var memoriaLocal = localStorage.getItem("memoria");
    memoriaLocal = memoriaLocal.split(',');
    var memoria2 = "";
    for (i = 0; i < memoriaLocal.length - 1; i++) {
        memoria2 += memoriaLocal[i] + ",";
    }
    memoria2 += parseFloat(memoriaLocal[memoriaLocal.length - 1]) + parseFloat($('#valor').text());
    memoria = memoria2.split(',');
    localStorage.setItem("memoria", memoria2);
    while (memoria2.includes(','))
        memoria2 = memoria2.replace(',', '<br>')
    document.getElementById("div-memoria").innerHTML = memoria2;
});
$(document).on('click', '#mMenos', function () {
    var memoriaLocal = localStorage.getItem("memoria");
    memoriaLocal = memoriaLocal.split(',');
    var memoria2 = "";
    for (i = 0; i < memoriaLocal.length - 1; i++) {
        memoria2 += memoriaLocal[i] + ",";
    }
    memoria2 += parseFloat(memoriaLocal[memoriaLocal.length - 1]) - parseFloat($('#valor').text());
    memoria = memoria2.split(',');
    localStorage.setItem("memoria", memoria2);
    while (memoria2.includes(','))
        memoria2 = memoria2.replace(',', '<br>')
    document.getElementById("div-memoria").innerHTML = memoria2;
});


$(document).ready(function () {
    $('#historico').click();
});

$(document).on('click', '#historico', function () {
    $('.tab').html("<div id='div-historico'>Ainda não há histórico</div>");
    var historicoLocal = localStorage.getItem("historico");
    while (historicoLocal.includes(','))
        historicoLocal = historicoLocal.replace(',', '<br>');
    $('#div-historico').html(historicoLocal);
    $('#his').css('borderBottom', '3px solid red');
    $('#mem').css('borderBottom', 'none');
});

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
}

$(document).on('click', '#btn-toggle-dark-mode', function() {
    toggleDarkMode();
});
