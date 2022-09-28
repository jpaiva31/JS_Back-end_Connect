//Calcule o volume de uma caixa d'água cilíndrica. 
function cilindro(raio,altura){
    console.log("O volume do cilindro é "+ String((2*3.14*raio*altura)+(2*3.14*raio*raio)))
}
raio = prompt("Digite o raio do cilindro: ")
altura = prompt("Digite a altura do cilindro: ")
cilindro(raio,altura)