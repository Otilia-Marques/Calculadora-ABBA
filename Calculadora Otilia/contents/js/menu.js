at$(document).ready(function() {

  // Seleciona o botão de fechar
  var closeBtn = $('#close-menu');

  // Adiciona um evento de clique ao botão de fechar
  closeBtn.on('click', function() {
    // Oculta o menu lateral ao clicar no botão de fechar
    sideMenu.removeClass('show');
  });
  
  // Seleciona o botão do menu
  var btnMenu = $('#btn-menu');
  
  // Seleciona o menu lateral
  var sideMenu = $('#side-menu');
  
  // Seleciona as opções do menu
  var colorOption = $('#color-option');
  var converterOption = $('#converter-option');
  
  // Adiciona um evento de clique ao botão do menu
  btnMenu.on('click', function() {
    // Exibe ou oculta o menu lateral ao clicar no botão
    sideMenu.toggleClass('show');

    colorOption.on('click', function() {
      toggleDarkMode();
    });
  
  });
    
  // Adiciona um evento de clique à opção de mudar cor
  colorOption.on('click', function() {
    // Implemente o código para mudar a cor aqui
    alert('Opção para mudar cor selecionada');
  });
  
  // Adiciona um evento de clique à opção do conversor de unidade
  converterOption.on('click', function() {
    // Implemente o código para mudar para o conversor de unidade aqui
    alert('Opção para mudar para o conversor de unidade selecionada');
  });

});