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
    clear(){
        this.currentResult = this.currentResult.toString.slice(0, -1);
    };
    appendNumber(num){
        //To have only one decimal in a string
        if(num === '.' && this.currentResult.includes('.'))
        {
            return ; 
        }
        this.currentResult = this.currentResult.toString() + num.toString();
    };
    chooseOperation(operation){
        if(this.currentResult === '') return;
        if(this.previousResult !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousResult = this.currentResult;
        this.currentResult = "";
    };
    compute(){
        let compute;
        const prev = parseFloat(this.previousResult);
        const curr = parseFloat(this.currentResult);
        if(isNaN(prev)||isNaN(curr)) return;
        switch(this.operation){
            case '+':
            compute = prev + curr;
            break;
            case '-':
            compute = prev - curr;
            break;
            case '*':
            compute = prev * curr;
            break;
            case '/':
            compute = prev / curr;
            break;
            default:
            return;
        }
        this.currentResult = compute;
        this.operation = undefined;
        this.previousResult = '';
    };
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

operationButtons.forEach(operation =>{
    operation.addEventListener('click',()=>{
        calculator.chooseOperation(operation.textContent);
        calculator.updateDisplay();  
    });
});
equalsButton.addEventListener('click',()=>{
        calculator.compute();
        calculator.updateDisplay();  
    });
allClearButton.addEventListener('click',()=>{
    calculator.allClear();
    calculator.updateDisplay();  
});
clearButton.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDisplay();
});