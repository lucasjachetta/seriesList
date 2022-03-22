function adicionarSerie() {
  let serieFavorita = document.getElementById("serie").value;

  if (serieFavorita.endsWith(".jpg")) {
    listarSeriesNaTela(serieFavorita);
  } else {
    console.error("Endereço de filme inválido");
  }

  document.getElementById("serie").value = "";
}

function listarSeriesNaTela(serieFavorita) {
  let elementoSerieFavorita = "<img src=" + serieFavorita + ">";
  let elementoListaSeries = document.getElementById("listaSeries");
  elementoListaSeries.innerHTML =
    elementoListaSeries.innerHTML + elementoSerieFavorita;
}