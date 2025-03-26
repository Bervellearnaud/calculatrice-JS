/*function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (e) {
    alert("Erreur !");
    clearDisplay();
  }
}*/

let newCalculation = false; // Indique si un nouveau calcul commence

function appendToDisplay(value) {
  if (newCalculation) {
    document.getElementById("display").value = "";
    newCalculation = false;
  }
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  newCalculation = false;
}

function calculateResult() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
    newCalculation = true; // Marquer qu'un calcul a été fait
  } catch (e) {
    alert("Erreur !");
    clearDisplay();
  }
}
