//A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. 
//Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado
 //funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos. 
 function salario(brut){
     console.log("O salario bruto desse funcionário é "+ String(brut)+" e seu salário líquido é "+ String(brut-(brut*0.1)))
 }
 function horas(N,E){
    salario(N*10+E*15) 
 }
 N = prompt("Digite a quantidade de horas normais trabalhadas: ")
 E = prompt("Digite a quantidade de horas extras trabalhadas: ")
 horas(N,E)