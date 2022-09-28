//A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo,
//uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa
//50 gramas, e que a rodela de hamburguer pesa 100 gramas, faça um algoritmo em que o dono forneça a
//quantidade de sanduiches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto
//e carne necessários para compra. 
function hamburguer(qtd){
    console.log("Você precisa de "+ String(2*0.05*qtd)+ " de queijo, " + String(0.05*qtd)+ " e "+ String(0.1*qtd)+ " de hamburguer, em kilogramas.") 
}

qtd = prompt("Quantos hamburgões você quer? ")
hamburguer(qtd)
