const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let description = "";

  // Remove classes anteriores para não acumular cores
  value.classList.remove("attention", "normal", "alert");

  // Mostra a área de resultado
  document.getElementById("infos").classList.remove("hidden");

  // Lógica das faixas de IMC e avisos
  if (bmi < 18.5) {
    description = "Cuidado! Você está abaixo do peso!";
    value.classList.add("alert"); // Amarelo/Laranja
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    description = "Você está no peso ideal!";
    value.classList.add("normal"); // Verde
  } else if (bmi >= 25 && bmi <= 29.9) {
    description = "Cuidado! Você está com sobrepeso!";
    value.classList.add("alert"); // Amarelo/Laranja
  } else if (bmi >= 30 && bmi <= 34.9) {
    description = "Cuidado! Você está com obesidade moderada (Grau I)!";
    value.classList.add("attention"); // Vermelho
  } else if (bmi >= 35 && bmi <= 39.9) {
    description = "Cuidado! Você está com obesidade severa (Grau II)!";
    value.classList.add("attention"); // Vermelho
  } else {
    description = "Cuidado! Você está com obesidade mórbida (Grau III)!";
    value.classList.add("attention"); // Vermelho
  }

  // Exibe o valor do IMC trocando ponto por vírgula
  value.textContent = bmi.replace(".", ",");

  // Insere o texto da descrição no local correto
  document.querySelector("#description span").textContent = description;
});
