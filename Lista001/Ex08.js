//Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa.
//Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura,
//faça um algoritmo para ler os dados necessários e calcular a altura do prédio.

function predio(t1,t2,t3){
    console.log("A altura do prédio é "+ String(t1*t3/t2))
}

t1 = prompt("Digite sua altura: ")
t2 = prompt("Digite o tamanho da sua sombra: ")
t3 = prompt("Digite o tamaho da sombra do prédio: ")
predio(t1,t2,t3)