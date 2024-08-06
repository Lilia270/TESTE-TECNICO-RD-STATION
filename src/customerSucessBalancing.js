/**
 * Distribui clientes para os Customer Success (CSs) disponíveis com base em sua capacidade.
 * @param {Array} customerSuccess - Lista de CSs com id e nível de experiência.
 * @param {Array} customers - Lista de clientes com id e tamanho.
 * @param {Array} customerSuccessAway - IDs dos CSs que estão indisponíveis.
 * @returns {number} - ID do CS que atendeu mais clientes ou 0 em caso de empate.
 */




function customerSuccessBalancing(customerSuccess, customers, customerSuccessAway) {
    // Remove CSs que estão indisponíveis
    const availableCS = customerSuccess.filter(cs => !customerSuccessAway.includes(cs.id));
  
    // Ordena CSs e clientes por nível de experiência
    availableCS.sort((a, b) => a.score - b.score);
    customers.sort((a, b) => a.score - b.score);
  
    // Mapa para contar o número de clientes atendidos por cada CS
    const csCustomerCount = new Map();
  
    // Distribui os clientes entre os CSs disponíveis
    customers.forEach(customer => {
      for (let cs of availableCS) {
        if (cs.score >= customer.score) {
          csCustomerCount.set(cs.id, (csCustomerCount.get(cs.id) || 0) + 1);
          break;
        }
      }
    });
  
    // Determina o CS que atendeu mais clientes
    let maxCustomers = 0;
    let csWithMaxCustomers = 0;
    let isTie = false;
  
    csCustomerCount.forEach((count, csId) => {
      if (count > maxCustomers) {
        maxCustomers = count;
        csWithMaxCustomers = csId;
        isTie = false;
      } else if (count === maxCustomers) {
        isTie = true;
      }
    });
  
    return isTie ? 0 : csWithMaxCustomers;
  }
  
  module.exports = customerSuccessBalancing;
  