// vetores (arrays) são estruturas de dados que armazenam uma coleção de elementos, onde cada elemento é identificado por um índice numérico. Eles são usados para organizar e manipular conjuntos de dados relacionados.
const listacompras= ["tomate","cebola","farinha"]

// um array pode conter vários tipos de dados diferentes
const misturado= ["tomate",8,true]


// acrescentando elemento novo no vetor
listacompras.push("limão") // acrescenta no final do vetor

listacompras[0] = "laranja"
listacompras[4] = "açucar" // acrescenta um elemento na posição 4, mesmo que a posição 3 esteja vazia

console.log(listacompras)
console.log(listacompras.length) // length é uma propriedade que retorna o número de elementos em um array

let pop = listacompras.pop() // remove o último elemento e o exibe

console.log(pop)
console.log(listacompras)


listacompras.push("amora")

// for(começo;quando termina;acréscimo)


/* // laço for clássico

for(let i = 0; i < listacompras.length; i++){
    console.log(`index ${i}: ${listacompras[i]}`)
}

// percorrendo o vetor ao contrário

for(let i) = (listacompras.length - 1; i >= 0; i--){
    console.log(`index ${i}: ${listacompras[i]}`)
}  */

/* for(const item of listacompras){
    console.log(item)
}
 */

/* console.log(listacompras.indexOf("laranja")) // diz qual o indice de um elemento de um vetor (array) */

let x = 0

while(x< 10){
    console.log(x)
    x++
}

