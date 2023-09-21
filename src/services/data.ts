function calcularDiasPassadosComTexto(dataInicioString: string) {
  // Converte a data de início no formato "DD/MM/YYYY HH:mm:ss" em milissegundos
  const partesDataHora = dataInicioString.split(' ');
  const [dataPartes, horaPartes] = partesDataHora;
  const [dia, mes, ano] = dataPartes.split('/').map(Number);
  const [hora, minuto, segundo] = horaPartes.split(':').map(Number);
  const dataInicio = new Date(ano, mes - 1, dia, hora, minuto, segundo).getTime();

  const dataAtual = new Date();

  // Calcula a diferença em milissegundos e converte para dias
  const diferencaEmMilissegundos = dataAtual.getTime() - dataInicio;
  const diasPassados = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  return `${diasPassados} dias atrás`;
}


export default calcularDiasPassadosComTexto;