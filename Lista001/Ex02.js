//Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça 
//um algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit (pesquise como 
//fazer este tipo de conversão). 
function celsius_Farenheit(temp){
    console.log(String(temp)+ " graus Celsius em Farenheit são "+ String(temp*(9/5)+32))
}
temp = prompt("Digite a temperatura em Celsius: ")
celsius_Farenheit(temp)