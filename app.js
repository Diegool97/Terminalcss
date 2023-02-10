var prompt = require('prompt-sync')();

// input do usuário //

let questao = prompt('Quer armazenar algo? (sim/nao) ');

const armazenamento = [];

while(questao != "nao"){

    if(questao == "sim"){

        var propriedade = prompt('Qual é a propriedade do CSS? ')

        if(propriedade == "sair"){
            return;
        }
        armazenamento.push(propriedade)
        armazenamento.sort()
        console.log(armazenamento)

    } else{
        console.log('Você escreveu (' + questao + '), escreva apenas (sim/nao)!')
        break;
    }
}
