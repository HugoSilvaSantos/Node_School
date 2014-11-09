/*
Este programa aceita 2 argumentos (numeros) pela linha de comandos, somando-os
*
A passagem e feita com o objecto process (process.argv) que e um array, que contem a linha de comandos
*
Nota:
process.argv[0] e sempre node
process.argv[1] e sempre a path do programa
process.argv[2] comeca a recepcao de argumentos
*
Sao strings que precisam de ser convertidas para numeros
+process.argv[2] ou Number(process.argv[2]) faz a conversao
*
O learnyounode adiciona argumentos na linha de comandos
*/

var soma=0;

for (i = 2; i < process.argv.length; i++) { //ciclo que percorre os dois argumentos recebidos

	soma += Number(process.argv[i]);		//string convertida para numero, e soma acumula
}

console.log(soma);