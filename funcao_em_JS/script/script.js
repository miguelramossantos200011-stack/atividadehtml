// var Nome = prompt('Digite seu nome: ');

// function Oi1(Nome){
//    document.write('Olá, ' + Nome + '. '); 
// }

// function Oi2(Nome){
//     document.write('Bom dia, ' + Nome + '. '); 
// }

// function Exibir(Oi1, Oi2, Nome){
//     // Agora gera um número decimal direto para bater com a sua lógica do >= 0.5
//     let id = Math.random(); 

//     if (id >= 0.5){
//         Oi1(Nome); 
//     } else {
//         Oi2(Nome); 
//     }
// }

// Exibir(Oi1, Oi2, Nome);

// var Largura = prompt('Insira a largura do terreno: ');
// var Comprimento = prompt('Insira o comprimento do terreno: ');

// var Area = CalcularTerreno(Largura, Comprimento);
// var Preco = CalcularPreco(Area);

// document.write('O seu terreno possui ' + Area + 'm², o que vale ' + Preco + ' R$ na Vila Marina. ');

// function CalcularTerreno(Largura, Comprimento){
//     var Area = Largura * Comprimento;
//     return Area;
// }

// function CalcularPreco(Area){
//     var Preco = Area * 17500;
//     return Preco;
// }
// function NumTerreno(Nome) {

//     const mapaLetras = {
//         'a': '0', 'b': '1', 'c': '1', 'd': '1', 'e': '1', 'f': '1', 'g': '2', 'h': '2', 'i': '2', 'j': '2', 'k': '2',
//         'l': '3', 'm': '3', 'n': '3', 'o': '3', 'p': '4', 'q': '4', 'r': '4', 's': '5', 't': '5', 'u': '5', 'v': '6',
//         'w': '6', 'x': '7', 'y': '7', 'z': '8',
//         'A': '9', 'B': '0', 'C': '1', 'D': '1', 'E': '1', 'F': '1', 'G': '1', 'H': '2', 'I': '2', 'J': '2', 'K': '2',
//         'L': '2', 'M': '3', 'N': '3', 'O': '3', 'P': '3', 'Q': '4', 'R': '4', 'S': '4', 'T': '5', 'U': '5', 'V': '5',
//         'W': '6', 'X': '6', 'Y': '7', 'Z': '7'
//     };

//     let numeroGerado = "";

//     for (let i = 0; i < Nome.length; i++) {
//         let letraAtual = Nome[i];
        
//         if (mapaLetras[letraAtual] !== undefined) {
//             numeroGerado += mapaLetras[letraAtual];
//         } else {
//             numeroGerado += letraAtual; 
//         }
//     }

//     return numeroGerado;
// }

// var numeroDoTerreno = NumTerreno(Nome);
// document.write('O Num do seu terreno é ' + numeroDoTerreno);

function acao1(){

    alert("evento de on-click");

    document.getElementById("txt").innerText = "FAIL"

}
