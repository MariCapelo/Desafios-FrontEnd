const BotaoPlus1 = document.getElementById('b1');
const BotaoPlus2 = document.getElementById('b2');
const BotaoPlus3 = document.getElementById('b3');
const BotaoPlus4 = document.getElementById('b4');

const frase1 = document.getElementById('resp1');
const frase2 = document.getElementById('resp2');
const frase3 = document.getElementById('resp3');
const frase4 = document.getElementById('resp4');

let aparecer1 = 0;
let aparecer2 = 0;
let aparecer3 = 0;
let aparecer4 = 0;

function show1()
{
    if(aparecer1 === 0)
    {
        frase1.style.display = "block";
        BotaoPlus1.src = "assets/images/icon-minus.svg";
        aparecer1 = 1;
    }
    else
    {
        frase1.style.display = "none";
        BotaoPlus1.src = "assets/images/icon-plus.svg"
        aparecer1 = 0;
    }
   
}
function show2()
{
    if(aparecer2 === 0)
    {
        frase2.style.display = "block";
        BotaoPlus2.src = "assets/images/icon-minus.svg";
        aparecer2 = 1;
    }
    else
    {
        frase2.style.display = "none";
        BotaoPlus2.src = "assets/images/icon-plus.svg"
        aparecer2 = 0;
    }
    
}
function show3()
{
    if(aparecer3 === 0)
    {
        frase3.style.display = "block";
        BotaoPlus3.src = "assets/images/icon-minus.svg";
        aparecer3 = 1;
    }
    else
    {
        frase3.style.display = "none";
        BotaoPlus3.src = "assets/images/icon-plus.svg"
        aparecer3 = 0;
    }
    
}
function show4()
{
    if(aparecer4 === 0)
    {
        frase4.style.display = "block";
        BotaoPlus4.src = "assets/images/icon-minus.svg";
        aparecer4 = 1;
    }
    else
    {
        frase4.style.display = "none";
        BotaoPlus4.src = "assets/images/icon-plus.svg"
        aparecer4 = 0;
    }
    
}


BotaoPlus1.addEventListener('click', show1);
BotaoPlus2.addEventListener('click', show2);
BotaoPlus3.addEventListener('click', show3);
BotaoPlus4.addEventListener('click', show4);