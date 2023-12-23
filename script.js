var op,x,y;
var scan;
var compute = false;


function createButtons() {
    const screen = document.querySelector('.screen');

    const btn = document.querySelectorAll('button');
    for(let i = 0; i < btn.length; i++) {
        let computedStyle = window.getComputedStyle(btn[i]);
        btn[i].addEventListener('mouseover', () => {
            btn[i].style.backgroundColor = computedStyle.getPropertyValue('--hover-color');            
        });
        btn[i].addEventListener('mouseout', () => {
            btn[i].style.backgroundColor = computedStyle.getPropertyValue('--bg-color');
        })
    }

    const vals = document.querySelectorAll('.value');
    for(let i = 0; i < vals.length;i++) {
        vals[i].addEventListener('click',function(e) {
            //console.log(e.target.innerText);
            display(e.target.innerText);
        });
    }

    const ac = document.querySelector('.clear');
    ac.addEventListener('click',(clear));

    const sign = document.querySelector('.sign');
    sign.addEventListener('click', () => {
        if(screen.innerText[0] == "-") screen.innerText = screen.innerText.slice(1);
        else if(screen.innerText.length == 11) screen.innerText = "-" + screen.innerText.slice(0,10);
        else if (screen.innerText != "0" )screen.innerText = "-" + screen.innerText;
    });

    const percent = document.querySelector('.percent');
    percent.addEventListener('click',(getPercent));

    const operators = document.querySelectorAll('.operator');
    for(let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function(e) {
        console.log(e.target);
        if(screen.innerText[0] == '-') x = 0 - parseInt(screen.innerText);
        else x = parseInt(screen.innerText);
        compute = true;
    });
    }
    

    const equal = document.querySelector('.equal');
    equal.addEventListener('click',() => {
        screen.innerText = operate(op,x,y);
        compute = false;
    });
}
createButtons();


function operate(op,a,b) {
    /*
    + : 0
    - : 1
    * : 2
    / : 3
    */
    switch(op) {
        case 0: return a + b;
        case 1: return a - b;
        case 2: return a * b;
        case 3: return a/b;
        default: return a;
    }
}
function display(n) {
    const screen = document.querySelector('.screen');
    if(screen.innerText == "0") screen.innerText = n;
    else if(screen.innerText.length < 11) screen.innerText += n;
    else {
        if(screen.innerText[0] == "-") screen.innerText = "-" + screen.innerText.slice(2) + n;
        else screen.innerText = screen.innerText.slice(1) + n;
    }
}
function clear() {
    const screen = document.querySelector('.screen');
    screen.innerText = "0";
}

function getPercent() {
    const screen = document.querySelector('.screen');
    screen.innerText = parseInt(screen.innerText)/100;

}

/*
To do:
operations
    save each input
*/