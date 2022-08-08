const calc = document.querySelector(".container");

const calcScreen = document.querySelector(".calcScreen");
const calcText = document.createElement("p");
{
    calcText.textContent = "12";
    calcText.style.fontSize = "34px";
}
calc.appendChild(calcScreen);
calcScreen.appendChild(calcText);
