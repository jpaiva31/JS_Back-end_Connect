//Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. 
//Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se
//fazer X litros de refresco (informados pelo usuário).
function litros(qtd){
    console.log("Você precisará de "+ String(qtd*0.8)+" litros d'agua e "+ String(qtd*0.2)+ " de suco!")
}
qtd = prompt("Digite quantos litros de suco você deseja fazer: ")
litros(qtd)