function calcularDiasPassadosComTexto(dataInicioString: string) {
  const partesDataHora = dataInicioString.split(' ');
  const [dataPartes, horaPartes] = partesDataHora;
  const [dia, mes, ano] = dataPartes.split('/').map(Number);
  const [hora, minuto, segundo] = horaPartes.split(':').map(Number);
  const dataInicio = new Date(ano, mes - 1, dia, hora, minuto, segundo).getTime();

  const dataAtual = new Date();

  const diferencaEmMilissegundos = dataAtual.getTime() - dataInicio;
  const diasPassados = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  if (diasPassados < 1) {
    const horasPassadas = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60));
    return `${horasPassadas} hora${horasPassadas !== 1 ? 's' : ''} atrás`;
  } else if (diasPassados === 1) {
    return '1 dia atrás';
  } else {
    return `${diasPassados} dias atrás`;
  }
}

export default calcularDiasPassadosComTexto;