let pagamento;
let op;
let d;
let contador = 0;

do {

    op = parseInt(prompt(`Bem vindo ao Senai esperança!! \n escolha o valor que deseja doar \n [1] para doar R$ 10,00 \n [2] para doar R$ 20,00 \n [3] para doar R$30,00 \n [4] para doar R$ 40,00 \n [5] para doar R$ 50,00 \n [6] para doar outro valor \n [7] para sair`))

    switch(op) {

        case 1: 
            pagamento = 10.00;

            for(let i = 0; i <= pagamento; i++){

                if (i == 0){

                    d = prompt(`Confirme para doar R$ ${pagamento}`);

                } else {

                    d = prompt(`Confime para doar R$ ${pagamento}, já foi doado R$ ${i}`);

                }

            }

            d = prompt(`Obrigado por doar R$ ${pagamento}`);

            contador ++;

        
        break;

        case 2: 
            pagamento = 20.00;

            for(let i = 0; i <= pagamento; i++){

               if (i == 0){

                    d = prompt(`Confirme para doar R$ ${pagamento}`);

                } else {

                    d = prompt(`Confime para doar R$ ${pagamento}, já foi doado R$ ${i}`);

                }

            }

            d = prompt(`Obrigado por doar R$ ${pagamento}`);

            contador ++;


        
        break;

        case 3: 
            pagamento = 30.00;

            for(let i = 0; i <= pagamento; i++){

                if (i == 0){

                    d = prompt(`Confirme para doar R$ ${pagamento}`);

                } else {

                    d = prompt(`Confime para doar R$ ${pagamento}, já foi doado R$ ${i}`);

                }

            }

            d = prompt(`Obrigado por doar R$ ${pagamento}`);

            contador ++;
        
        break;

        case 4: 
            pagamento = 40.00;

            for(let i = 0; i <= pagamento; i++){

                if (i == 0){

                    d = prompt(`Confirme para doar R$ ${pagamento}`);

                } else {

                    d = prompt(`Confime para doar R$ ${pagamento}, já foi doado R$ ${i}`);

                }

            }

            d = prompt(`Obrigado por doar R$ ${pagamento}`);

            contador ++;
        
        break;

        case 5: 
            pagamento = 50.00;

            for(let i = 0; i <= pagamento; i++){

                if (i == 0){

                    d = prompt(`Confirme para doar R$ ${pagamento}`);

                } else {

                    d = prompt(`Confime para doar R$ ${pagamento}, já foi doado R$ ${i}`);

                }

            }

            d = prompt(`Obrigado por doar R$ ${pagamento}`);

            contador ++;
        
        break;

        case 6: 
            pagamento = parseFloat(prompt(`insira o valor que você deseja doar: `));
            for(let i = 0; i <= pagamento; i++){

                if (i == 0){

                    d = prompt(`Confirme para doar R$ ${pagamento}`);

                } else {

                    d = prompt(`Confime para doar R$ ${pagamento}, já foi doado R$ ${i}`);

                }

            }

            d = prompt(`Obrigado por doar R$ ${pagamento}`);

            contador ++;
        
        break;

        case 7:
            
            d = prompt(`Obrigado por acessar nosso site <3`);

        break;

        default:
            d = prompt(`opção inválida`);

        break;


        

    }

}while(op != 7);

d = prompt(`Foram feitas ${contador} doações`);