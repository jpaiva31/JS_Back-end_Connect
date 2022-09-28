//Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior + base menor)* altura)/2 ;
function trap(n1,n2,n3){
    alert("A área do trapesio é "+ String((n1+n2)/n3))
}
n1 = prompt("Digite o tamanho da base maior: ")
n2 = prompt("Digite o tamanho da base menor: ")
n3 = prompt("Digite o tamanho da altura: ")
trap(n1,n2,n3)