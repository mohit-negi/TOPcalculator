
//Adding calcScreen and its content 
const calc = document.querySelector(".container");
const calcScreen = document.querySelector(".calcScreen");
const calcText = document.createElement("p");
{
    calcText.textContent = "12";
    calcText.style.fontSize = "34px";
}
calc.appendChild(calcScreen);
calcScreen.appendChild(calcText);

//Adding functionality to the keys 
const calcButtons = calc.querySelector('.calcButtons');
calcButtons.addEventListener('click',e => {
    

    if(e.target.matches('button'))
    {
        let data = e.target;
        let action = data.dataset.action;
        if(action !== undefined)
        {
            if(action == 'add')
            {
                //addition;
            }
        }
    }
});
