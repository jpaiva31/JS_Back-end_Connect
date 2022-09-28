//Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. 
//Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total 
//economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda 
//moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero. 
function moedas(t1,t2,t3,t4,t5,t6){
    console.log("O valor total acumulado é:  "+ String((t1*0.01+t2*0.05+t3*0.1+t4*0.25+t5*0.5+t6*1)))
}

t1 = Number(prompt("Digite a quantidade de moedas de 1 centavo: "))
t2 = Number(prompt("Digite a quantidade de moedas de 5 centavos: "))
t3 = Number(prompt("Digite a quantidade de moedas de 10 centavos"))
t4 = Number(prompt("Digite a quantidade de moedas de 25 centavos "))
t5 = Number(prompt("Digite a quantidade de moedas de 50 centavos "))
t6 = Number(prompt("Digite a quantidade de moedas de 1 real"))
moedas(t1,t2,t3,t4,t5,t6)