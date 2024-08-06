# CUSTOMER SUCESS BALANCING

Este projeto oferece uma solução para o desafio de balanceamento entre clientes e Customer Success (CSs).
O objetivo é distribuir clientes entre CSs disponíveis com base em sua capacidade de atendimento e identificar qual CS atendeu o maior número de clientes.

## DESCRIÇÃO DO PROBLEMA

O desafio consiste em balancear a carga de trabalho entre Customer Success (CSs) disponíveis, levando em consideração o tamanho dos clientes e a capacidade dos CSs.
A distribuição deve ser feita da forma mais eficiente possível, garantindo que os clientes sejam atendidos pelos CSs com a maior capacidade de atendimento que estejam disponíveis.

## SOLUÇÃO IMPLEMENTADA

A solução utiliza uma função que realiza os seguintes passos:

1. **Filtra CSs Disponíveis**: Remove os CSs que estão indisponíveis (em férias, doentes, etc.).
2. **Ordena CSs e Clientes**: Ordena os CSs e clientes com base em sua capacidade de atendimento e tamanho, respectivamente.
3. **Distribui Clientes**: Atribui clientes aos CSs disponíveis de acordo com sua capacidade, garantindo que cada cliente seja atendido pelo CS com a maior capacidade de atendimento que ainda não tenha sido designado.
4. **Identifica o CS com Mais Clientes**: Conta o número de clientes atendidos por cada CS e determina qual CS atendeu o maior número. Em caso de empate, retorna 0.

## NOTAS GERAIS

1 -> Versão do Node.js: Certifique-se de ter o Node.js instalado. Este projeto foi desenvolvido e testado com a versão Node.js 18.x.
2 -> Dependências: O projeto utiliza o Jest para testes. A versão do Jest está listada no arquivo package.json.
3 -> Ambiente: O código deve funcionar em qualquer ambiente que suporte Node.js e a versão de npm especificada.

## INSTALAÇÃO

Para executar o projeto localmente, siga estas etapas:

1 - Extraia o arquivo ZIP contendo o código-fonte em um diretório de sua escolha.

2 - Navegue até o diretório do projeto:
-> cd <NOME_DO_DIRETÓRIO>
3 - Instale as dependências usando npm:
-> npm install

## EXECUÇÃO DE TESTES

1 - Os testes estão localizados no arquivo test/customerSucessBalancing.test.js. Para executá-los, use o comando:
-> npm test

Isso garantirá que a função customerSuccessBalancing esteja funcionando conforme esperado.

## EXEMPLOS DE USO

Aqui está um exemplo de como utilizar a função customerSuccessBalancing

const customerSuccessBalancing = require('./src/customerSucessBalancing');

const css = [
{ id: 1, score: 60 },
{ id: 2, score: 20 },
{ id: 3, score: 95 },
{ id: 4, score: 75 }
];

const customers = [
{ id: 1, score: 90 },
{ id: 2, score: 20 },
{ id: 3, score: 70 },
{ id: 4, score: 40 },
{ id: 5, score: 60 },
{ id: 6, score: 10 }
];

const csAway = [2, 4];

const result = customerSuccessBalancing(css, customers, csAway);
console.log(result); // Saída esperada: 1

## TESTES ADICIONAIS

Adicionei testes adicionais para garantir que a função customerSuccessBalancing se comporte conforme o esperado em diferentes cenários.
Estes testes cobrem casos de empate e situações onde um CS atende mais clientes do que os outros.
