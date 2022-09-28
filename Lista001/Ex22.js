//Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário. 
function salario(n1){
    i=0
    for(i=0;i<10;i++){
        console.log(string(n1)+ "* "+string(i)+" = "+ string(n1*i))
    }
}
    n1 = prompt("Digite um numero: ")
    salario(n1)