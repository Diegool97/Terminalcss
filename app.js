var prompt = require('prompt-sync')();

let question = prompt('Quer armazenar algo? (sim/nao) ');

const armazem = [];

while(question != "nao"){

    if(question == "sim"){

        var propriedadeCSS = prompt('Qual é a propriedade do CSS? ')

        if(propriedadeCSS == "sair"){
            return;
        }
        armazem.push(propriedadeCSS)
        armazem.sort()
        console.log(armazem)

    } else{
        console.log('Você escreveu (' + question + '), escreva apenas (sim/nao)!')
        break;
    }
}
