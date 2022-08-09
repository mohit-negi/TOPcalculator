class Calculator{
    constructor(previousResult,currentResult)
    {
        this.previousResultButton = previousResult;
        this.currentResultButton = currentResult;
        this.allClear();
    }
    //adding functions
    allClear(){
        this.currentResult = "";
        this.previousResult = "";
        this.operation = undefined;
    };
    clear(){};
    appendNumber(num){
        this.currentResult = num;
    };
    chooseOperation(operation){};
    compute(){};
    updateDisplay(){
        this.currentResultButton.innerText = this.currentResult;
        this.previousResultButton.innerText = this.previousResult;
    };


}

const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons = document.querySelectorAll(`[data-operation]`)
const equalsButton = document.querySelector(`[data-equals]`);
const clearButton = document.querySelector(`[data-clear]`);
const allClearButton = document.querySelector(`[data-all-clear]`);
//const addButton = document.querySelector(`[data-add]`);
//const subtractButton = document.querySelector(`[data-subtract]`);
//const divisionButton = document.querySelector(`[data-division]`);
//const multiplyButton = document.querySelector(`[data-multiply]`);
const previousResultButton = document.querySelector(`[data-previous-result]`);
const currentResultButton = document.querySelector(`[data-current-result]`)

const calculator = new Calculator(previousResultButton,currentResultButton);
numberButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    });
});