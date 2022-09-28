//Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
//a. a idade dessa pessoa em anos;
//b. a idade dessa pessoa em meses; 
//c. a idade dessa pessoa em dias
//d. a idade dessa pessoa em semanas. 
function data(n1,n2){
        num = Number(n2-n1)
        console.log("Sua idade em anos:"+ String(num))
        console.log("Sua idade em meses:"+ String(num*12))
        console.log("Sua idade em dias:"+ String(num*12*30))
        console.log("Sua idade em semanas:"+ String(num*12*30/7))
}
    n1 = prompt("Digite seu ano de nascimento: ")
    n2 = prompt("Digite o ano atual: ")
    data(n1,n2)