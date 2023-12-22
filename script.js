var op,x,y;


function createButtons() {
    const screen = document.querySelector('.screen');

    const btn = document.querySelectorAll('.value');
    for(let i = 0; i < btn.length;i++) {
        btn[i].addEventListener('click',function(e) {
            //console.log(e.target.innerText);
            display(e.target.innerText);
        });
    }

    const ac = document.querySelector('.clear');
    ac.addEventListener('click',(clear));

    const sign = document.querySelector('.sign');
    sign.addEventListener('click', () => {
        if(screen.innerText[0] == "-") screen.innerText = screen.innerText.slice(1);
        else screen.innerText = "-" + screen.innerText;
    });
}
createButtons();


function operate(op,a,b) {

}
function display(n) {
    const screen = document.querySelector('.screen');
    screen.innerText = n;
}
function clear() {
    const screen = document.querySelector('.screen');
    screen.innerText = '0';
}