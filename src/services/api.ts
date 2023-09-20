const URL_IBGE = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';

export const getApi = async () => {
  const response = await fetch(URL_IBGE);
  const data = await response.json();
  return data;
}
