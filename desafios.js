console.log('Bem vindo(a) ao console log');

let nome = 'Giovana';
console.log(`Olá ${nome}`);
//alert(`Olá ${nome}`)

//let linguagem = prompt('Qual a linguagem de programção que você mais gosta?')

v1 = 5
v2 = 8
resultado = v1 + v2
resul = v2 - v1
console.log(`A soma de ${v1} e ${v2} é ${resultado}`)
console.log(`A subtração de ${v2} e ${v1} é ${resul}`)

//let idade = prompt('Digite sua idade')
//if (idade >= 18) {
//    console.log('Maior de idade');
//} else {
//    console.log('Menor de idade');
//}

//n = prompt('Digite um número')
//if (n > 0) {
//    console.log('O númeor é positivo')
//} else if (n < 0) {
//    console.loog('O número é negativo')
//} else {
//    console.log('O número é zero')
//}
//No curso da alura fizeram igual faço no python
//var numero = parseFloat(prompt("Digite um número:"));
//if (numero > 0) {
//    console.log("O número é positivo.");
//} else if (numero < 0) {
//    console.log("O número é negativo.");
//} else {
//    console.log("O número é zero.");
//}

let count = 0;

while (count < 5) {
    count++; 
    console.log(parseInt(Math.random() * 10 + 1 ));
}

nota = prompt('Digite a nota do aluno')
if (nota >= 7) {
    console.log('Aprovado')
}
else {
    console.log('Reprovado')
}
