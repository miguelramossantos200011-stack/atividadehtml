
let op

function verificarop(){

    switch(op) {

        case 1: 
            limpa();
            document.getElementById("1").style.backgroundColor = "red";
            break;

        case 2: 
            limpa();
            document.getElementById("2").style.backgroundColor = "yellow";
            break;


        case 3: 
            limpa();
            document.getElementById("3").style.backgroundColor = "green";
            break;


    }

}

function irparaquestionario(){

    window.location.href = "Pergunta1.html";

}


function acao1(){

    op = 1;
    verificarop(op);

}

function acao2(){

   
    op = 2;
    verificarop(op);

}

function acao3(){

    op = 3;
    verificarop(op);

}

function limpa(){

    document.getElementById("1").style.backgroundColor = "white";
    document.getElementById("2").style.backgroundColor = "white";
    document.getElementById("3").style.backgroundColor = "white";

}