const getCurrencies = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(url);
  const response = await request.json();
  return Object.keys(response).filter((currency) => currency !== 'USDT');
};
// Quero só as chaves do objeto response, que são as moedas.
// https://javascript.info/keys-values-entries

export default getCurrencies;
