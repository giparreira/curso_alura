alert('Boas vindas ao jogo do número secreto');
let nMx = 100
let numeroSecreto = parseInt(Math.random() * nMx + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
        chute = prompt(`Escolha um número entre 1 e ${nMx}`);
        // se o chute for igual ao numero secreto
    if (numeroSecreto == chute) {
        break
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)

//if (tentativas > 1) {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert('Isso aí! Você descobriu o número secreto com uma tentativa')
//}
