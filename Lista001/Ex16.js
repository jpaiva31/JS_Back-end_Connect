//16. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: 
//a. o novo peso se a pessoa engordar 15% sobre o peso digitado;
//b. o novo peso se a pessoa emagrecer 20% sobre o peso digitado. 
function peso(n1){
    console.log("O peso da pessoa caso ela emagreça 15% será "+ String(n1*1.15)+ "e caso emagreça 20% seu peso será "+ String(n1*0.8))
}
n1 = prompt("Digite o peso da pessoa: ")
peso(n1)