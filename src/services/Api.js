const getExchangeRates = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  delete response.USDT;
  return response;
};
// Quero só as chaves do objeto response, que são as moedas.
// https://javascript.info/keys-values-entries

export default getExchangeRates;
