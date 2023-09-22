function getImg(text: string) {
  const imagemData = JSON.parse(text);
  const caminhoDaImagem = imagemData.image_fulltext;
  return `https://agenciadenoticias.ibge.gov.br/${caminhoDaImagem}`
}

export default getImg;