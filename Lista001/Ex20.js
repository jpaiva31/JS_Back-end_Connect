//Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A = (diagonal_maior * diagonal_menor)/2; 
function los(n1,n2){
    alert("A área do losango é "+ String(n1*n2/2))
}
n1 = prompt("Digite o tamanho da diagonal maior: ")
n2 = prompt("Digite o tamanho da diagonal menor: ")
los(n1,n2)