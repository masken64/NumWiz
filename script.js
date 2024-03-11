//creating references to buttons on ui
const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const point = document.querySelector('#point');
const equal = document.querySelector('#equal');
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const power = document.querySelector('#power');
const del = document.querySelector('#del');
const ac = document.querySelector('#ac');
const numpad = document.querySelector('#numpad');
//adding eventlistners to refrences
zero.addEventListener('click',handleButtonClick);
one.addEventListener('click',handleButtonClick);
two.addEventListener('click',handleButtonClick);
three.addEventListener('click',handleButtonClick);
four.addEventListener('click',handleButtonClick);
five.addEventListener('click',handleButtonClick);
six.addEventListener('click',handleButtonClick);
seven.addEventListener('click',handleButtonClick);
eight.addEventListener('click',handleButtonClick);
nine.addEventListener('click',handleButtonClick);
equal.addEventListener('click',handleEqual);
add.addEventListener('click',handleOp);
minus.addEventListener('click',handleOp);
multiply.addEventListener('click',handleOp);
divide.addEventListener('click',handleOp);
power.addEventListener('click',handleOp);
del.addEventListener('click',delLastInput);
ac.addEventListener('click',resetCalc);

//numpad logic
function handleButtonClick(event){
    const buttonValue = event.target.innerText;
    console.log(buttonValue);
    const input = document.createElement('div');
    input.textContent = buttonValue;
    numpad.appendChild(input);
}

//handling delete and reset button clicks
function delLastInput(event){
    numpad.textContent = numpad.textContent.slice(0,-1);
}
function resetCalc(event){
    numpad.textContent = '';
}

//theme change
const switchTheme = document.querySelector('#themeSwitch');
switchTheme.addEventListener('click',changeBg);
function changeBg(event){
    const body = document.querySelector('body');
    let currColor = body.style.backgroundColor;
    if(currColor=='black'){
        body.style.backgroundColor='white';
        switchTheme.style.color='black';
        numpad.style.color='black';
        numpad.style.backgroundColor='white';
    }
    else{
        body.style.backgroundColor='black';
        switchTheme.style.color='white';
        numpad.style.color='white';
        numpad.style.backgroundColor='black';
    }
}

let currValue, previousValue, result,currOp;
function handleOp(event){
    currOp = event.target.innerText;
    previousValue = Number(numpad.textContent);
    numpad.textContent = '';
}
function handleEqual(event){
    currValue = Number(numpad.textContent);
   let result = Number(calculate(currOp,previousValue,currValue));
   numpad.textContent = result;
}
function calculate(currOp,a,b){
    switch(currOp){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case 'x':
            return a*b;
            break;
        case '/':
            return a/b;
            break;
        case '^':
            return a**b;
            break;
    }
}