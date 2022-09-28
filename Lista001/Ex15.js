//Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a comissão e o salário final do funcionário.
function salario(n1,n2){
    console.log("Sua comissão foi de "+ String(n2*0.04)+" e seu salário final é de "+String(n1+n2*0.04))
    }
    n1 = prompt("Digite o salário fixo do funcionario: ")
    n2 = prompt("Digite o valor das vendas do funcionario: ")
    salario(n1,n2)