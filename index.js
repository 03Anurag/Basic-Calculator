const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

const prevElement = document.querySelector('.prev');
const currentElement = document.querySelector('.current');
const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');
const clear = document.querySelector('[data-clear]');
const deleteEl = document.querySelector('[data-delete]');
const Evaluate = document.querySelector('[data-equals]');


class Calculator{
    constructor(prevElement,currentElement){
        this.prevElement = prevElement,
        this.currentElement = currentElement
        this.currOperand='';
        this.prevOperand='';
        this.operation=undefined;
    }

    clear(){
        this.currOperand='';
        this.prevOperand='';
        this.operation=undefined;
    }

    delete(){
        this.currOperand = this.currOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number==='.' && this.currOperand.includes('.')) return;
        this.currOperand = this.currOperand.toString() + number.toString();
        this.updateDisplay();
    }

    chooseOperation(operand){
        if(this.currOperand === '') return;
        if(this.prevOperand !==''){
            this.compute();
        }
        this.operation = operand;
        this.prevOperand = this.currOperand;
        this.currOperand = '';
        this.updateDisplay();
    }

    compute(){
        let value;
        const prev = parseFloat(this.prevOperand);
        const curr = parseFloat(this.currOperand);

        switch(this.operation){
            case '+':
                value = prev + curr;
                break;
            case '-':
                value = prev -curr;
                break;
            case '*':
                value = prev*curr;
                break;
            case '/':
                value = prev / curr;
                break;
            default :
                return
        }
        this.currOperand = value;
        this.operation = undefined;
        this.prevOperand = '';
        
    }

    updateDisplay(){
        this.currentElement.innerText= this.currOperand;
        if(this.operation !=null){
            this.prevElement.innerText = `${this.prevOperand} ${this.operation}`;
        }else{
            this.prevElement.innerText= '';
        }
    }
}

const calc = new Calculator(prevElement,currentElement);

numbers.forEach((number)=>{
    number.addEventListener('click',()=>{
        calc.appendNumber(number.textContent);

    })
})


clear.addEventListener('click',()=>{
    calc.clear();
    calc.updateDisplay();
})

operations.forEach((operation)=>{
    operation.addEventListener('click',()=>{
        calc.chooseOperation(operation.innerText);
        calc.updateDisplay();
    })
})

Evaluate.addEventListener('click',()=>{
    calc.compute();
    calc.updateDisplay();
})

deleteEl.addEventListener('click',()=>{
    calc.delete();
    calc.updateDisplay();
})




































// buttons.forEach((button)=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML==='='){
//             string = eval(string);
//             display.textContent=string;
//             string = '';
//         }else if(e.target.innerHTML==='AC'){
//             string = '';
//             display.textContent=string;
//         }else if(e.target.innerHTML==='DEL'){
//             string = string.slice(0,-1);
//             display.textContent=string;
//         }
//         else{
//             string = string + e.target.innerHTML;
//             display.textContent=string;
//         }
//     })
// })



