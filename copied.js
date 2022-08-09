//Adding functionality to the screen

const calculator = document.querySelector('.container');
const keys = calculator.querySelector('.calcButttons');

keys.addEventListener('click',(e)=>{
    if(e.target.matches('button'))
    {
        const key = e.target;
        const action = key.dataset.action;
        if(!action)
        {
            console.log('nu');
        }
        if(action === 'add'||
            action === 'subtract'||
            action === 'multiply'||
            action === 'division'
        )
        {
            console.log('operator key');
        }
    }
});