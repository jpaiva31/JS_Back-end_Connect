//A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, 
//garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade 
//de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou. 
function litros(t1,t2,t3){
    console.log("A quantidade de litros que serão compradas é "+ String(t1*0.35+t2*0.6+2*t3))
}

t1 = prompt("Digite a quantidade de garrafas de 350ml: ")
t2 = prompt("Digite a quantidade de garrafas de 600ml: ")
t3 = prompt("Digite a quantidade de garrafas de 2L: ")
litros(t1,t2,t3)