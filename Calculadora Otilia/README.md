## Documentação Técnica: Calculadora JavaScript

### Arquitetura do Software
A calculadora JavaScript utiliza uma arquitetura cliente-servidor, onde o cliente é representado pelo navegador web do usuário e o servidor é o ambiente de execução JavaScript dentro do navegador. A interação com a calculadora é baseada em eventos, como cliques em botões, que acionam funções JavaScript para executar cálculos e atualizar a interface do usuário.

### Estrutura do Código
O código está dividido em várias partes para facilitar a compreensão e manutenção. Aqui está uma visão geral das seções principais do código:

1. Definição de Variáveis e Elementos: O código começa com a definição de variáveis para armazenar elementos HTML relevantes, como o visor da calculadora, histórico e memória. Também existem variáveis para controlar o estado da calculadora, como a memória e o modo de ângulo (deg, rad, grad).

2. Funções Auxiliares: O código inclui várias funções auxiliares para realizar operações matemáticas específicas, como calcular o seno, cosseno, tangente, logaritmo, fatorial, entre outros.

3. Event Handlers: São definidos manipuladores de eventos para cada botão da calculadora. Esses manipuladores são acionados quando um botão é clicado e executam as ações correspondentes, como atualizar o visor, realizar cálculos ou armazenar valores em memória.

4. Integração com Local Storage: O código utiliza o recurso de armazenamento local do navegador (localStorage) para armazenar o histórico de cálculos e os valores em memória. Esses dados são atualizados e exibidos na interface do usuário conforme necessário.

### Dependências
A calculadora JavaScript não possui dependências externas. Ela utiliza as funcionalidades nativas do JavaScript e do HTML5 disponíveis nos navegadores modernos.

### Instruções para Execução
Para executar a calculadora JavaScript, siga as etapas abaixo:

1. Crie um arquivo HTML vazio.
2. Dentro do arquivo HTML, inclua o código JavaScript fornecido em uma tag `<script>` ou vincule um arquivo JavaScript externo usando a tag `<script src="seu-arquivo.js"></script>`.
3. Adicione elementos HTML à página para representar a interface da calculadora, como botões e um visor.
4. Certifique-se de atribuir IDs apropriados aos elementos HTML, conforme referenciado no código JavaScript fornecido.
5. Abra o arquivo HTML em um navegador moderno.
6. A calculadora será exibida e você poderá interagir com ela clicando nos botões para realizar cálculos.

Observações: Certifique-se de que o código JavaScript esteja carregado corretamente e não ocorram erros no console do navegador. Além disso, verifique se as dependências necessárias estão presentes (geralmente, o JavaScript e o HTML5 estão disponíveis em navegadores modernos).

### Conclusão
A calculadora JavaScript é uma aplicação simples que demonstra o uso de JavaScript e HTML para criar uma interface interativa de calculadora. A arquitetura cliente-servidor permite que os cálculos sejam realizados no navegador do usuário, fornecendo uma experiência de calculadora rápida e responsiva. O código pode ser personalizado e expandido para adicionar mais funcionalidades.