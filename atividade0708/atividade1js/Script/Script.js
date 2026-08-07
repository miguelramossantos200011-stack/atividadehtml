
let confirm;
let valor;

do{ 

    valor = parseFloat(prompt("olá, insira o valor da sua compra que deseja comprar: "));

    confirm = parseInt(prompt(`O valor da sua compra é R$ ${valor}, você confirma? digite 1 para sime 2 para não`));

}while (confirm != 1);

let op;

do {

    op = parseInt(prompt(`Bem vindo ao setor de pagamento, O valot total da sua compra foi de: ${valor}. Deseja pagar com:\n[1] para débito (desconto de 5%)\n[2] para parcelar(até 20 vezes)\nescolha: `))
    

    switch (op){

        case 1:

            let conf = prompt(`O total da sua compra é de R$ ${valor - (valor * 0.05)}`);
            break;
            
        case 2: 

            let parcelar;

            do {

                parcelar = parseInt(prompt(`Escolha em quanas vezes deseja parcelar o valor de R$ ${valor}: `))
                
                if(parcelar >= 2 && parcelar <= 3){
                
                    let conf = prompt(`O total da sua compra é de R$ ${valor * 1.03}`);

                } else if ( parcelar > 3 && parcelar <= 5) {

                    let conf = prompt(`O total da sua compra é de R$ ${valor * 1.05}`);

                }  else if ( parcelar > 5 && parcelar <= 9) {

                    let conf = prompt(`O total da sua compra é de R$ ${valor * 1.07}`);

                }  else if ( parcelar > 9 && parcelar <= 20) {

                    let conf = prompt(`O total da sua compra é de R$ ${valor * 1.09}`);

                } else {

                    let conf = prompt(`valor inválido, tente novamente.`);

                }

            }while(parcelar <= 1 && parcelar >= 21); 


            break;

        

    }

}while(op < 0 && op > 5);
