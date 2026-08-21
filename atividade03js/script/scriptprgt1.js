
let coluna = 4;
let linha = 4;

function CriarMatriz(coluna, linha){

    for (let i = 0; i < linha; i++) {
    matrizVazia[i] = []; 
    for (let j = 0; j < coluna; j++) {
        matrizVazia[i][j] = 0; 
    }

}

}

function marcar(prgnt, rspst){

    matriz[prgnt][rspst] = 1

    sessionStorage.setItem(prgnt, rspst);

}