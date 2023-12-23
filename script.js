var op,x,y;


var add = false;
var sub = false;
var mul = false;
var divide = false;
var output = false;
var xlogged = false;

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
            //console.log(e.target);
            x = parseFloat(screen.innerText);
            //console.log("operator",x);
            xlogged = true;
        });
    }

    const plus = document.querySelector('.plus');
    plus.addEventListener('click', () => {
        resetOp();
        plus.style.filter = "brightness(125%)";
        op = 0;
    });

    const minus = document.querySelector('.minus');
    minus.addEventListener('click', () => {        
        resetOp();
        minus.style.filter = "brightness(125%)";
        op = 1;
    });

    const mult = document.querySelector('.mult');
    mult.addEventListener('click', () => {
        resetOp();
        mult.style.filter = "brightness(125%)";
        op = 2;
    });

    const div = document.querySelector('.div');
    div.addEventListener('click', () => {
        resetOp();
        div.style.filter = "brightness(125%)";
        op = 3;
        
    });

    

    const equal = document.querySelector('.equal');
    equal.addEventListener('click',() => {
        //console.log("x at time of equal call:",x);
        y = parseFloat(screen.innerText);
        
        console.log(x,y,op);

        x = operate(op,x,y);
        screen.innerText = x;

        xlogged = true;
        output = true;

        op = -1;
        resetOp();
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
    var res,len;
    switch(op) {
        case 0: 
            res = a+b;
            len = (res + '').length
            if(len > 11) {
                return parseFloat((res+'').slice(0,11));
            }
            else return a+b;
        case 1:
            res = a-b;
            len = (res + '').length
            if(len > 11) {
                return parseFloat((res+'').slice(0,11));
            }
            else return a-b;
        case 2:
            res = a*b;
            len = (res + '').length
            if(len > 11) {
                return parseFloat((res+'').slice(0,11));
            }
            else return a*b;
        case 3:
            res = a/b;
            len = (res + '').length
            if(len > 11) {
                return parseFloat((res+'').slice(0,11));
            }
            else return a/b;
        default: return parseFloat(document.querySelector('.screen').innerText);
    }
}
function display(n) {
    const screen = document.querySelector('.screen');
    if(screen.innerText == "0" || output == true || xlogged == true) {
        screen.innerText = n;
        output = false;
        xlogged = false;
    }
    else if(screen.innerText.length < 11) screen.innerText += n;
    else {
        if(screen.innerText[0] == "-") screen.innerText = "-" + screen.innerText.slice(2) + n;
        else screen.innerText = screen.innerText.slice(1) + n;
    }
}
function clear() {
    const screen = document.querySelector('.screen');
    screen.innerText = "0";
    xsaved = false;
    compute = false;
    output = false;
    resetOp();
    op = -1;
}

function getPercent() {
    const screen = document.querySelector('.screen');
    screen.innerText = parseFloat(screen.innerText)/100;

}

function resetOp () {
    const plus = document.querySelector('.plus');
    const minus = document.querySelector('.minus');
    const mult = document.querySelector('.mult');
    const div = document.querySelector('.div');

    plus.style.filter = "brightness(100%)";
    minus.style.filter = "brightness(100%)";
    mult.style.filter = "brightness(100%)";
    div.style.filter = "brightness(100%)";
}

/*
To do:
operations
    save each input
*/