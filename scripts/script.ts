function atualizarHora() {
  const date = new Date();
  const horaAtual = date.getHours();
  const minutosAtual = date.getMinutes();
  const segundosAtual = date.getSeconds();
  const hora = document.getElementById("hora") as HTMLDivElement;
  const calendario = document.getElementById("calendario") as HTMLDivElement;
  const dia = date.getDate();
  const mes = numeroParaMesExtenso(date.getMonth()); // Obtém o mês por extenso
  const ano = date.getFullYear();
  const body = document.body;
  const imghora = document.getElementById("imghora") as HTMLImageElement;

  const horaStr = pluralizeIfNeeded(horaAtual, "hora");
  const minutosStr = pluralizeIfNeeded(minutosAtual, "minuto");
  const segundosStr = pluralizeIfNeeded(segundosAtual, "segundo");

  hora.innerHTML = `Agora são ${horaStr} ${minutosStr} ${segundosStr} ⏰`;

  calendario.innerHTML = `Hoje é dia ${dia} de ${mes} de ${ano} 📆`;

  if (horaAtual >= 0 && horaAtual < 4) {
    // Madrugada
    imghora.src = "imgs/madrugada.jpg";
    body.style.backgroundColor = '#CD8B72';
  } else if (horaAtual >= 4 && horaAtual < 12) {
    // Manhã
    imghora.src = "imgs/manha.jpg";
    body.style.backgroundColor = '#EDAD6B';
  } else if (horaAtual >= 12 && horaAtual < 15) {
    // Meio Dia
    imghora.src = "imgs/meiodia.jpg";
    body.style.backgroundColor = '#5E92D6';
  } else if (horaAtual >= 15 && horaAtual < 18) {
    // Tarde
    imghora.src = "imgs/tarde.jpg";
    body.style.backgroundColor = "#FAB04B";
  } else if (horaAtual >= 18 || horaAtual < 4) {
    // Noite
    imghora.src = "imgs/noite.jpg";
    body.style.backgroundColor = "#41433A";
  }
}

function pluralizeIfNeeded(valor: number, palavra: string): string {
  if (valor === 1) {
    return `${valor} ${palavra}`;
  } else {
    return `${valor} ${palavra}s`;
  }
}

// Função para converter número de mês para mês por extenso
function numeroParaMesExtenso(numero: number): string {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // Verifique se o número está dentro do intervalo válido (0-11)
  if (numero >= 0 && numero <= 11) {
    return meses[numero];
  } else {
    return "Mês inválido";
  }
}

// Atualize a cada segundo (1000 milissegundos)
setInterval(atualizarHora, 1000);

// Execute a função inicialmente para mostrar a hora imediatamente
atualizarHora();
