function calcular(){
let deslocamneto = document.getElementById("deslocamento")
let tempo = document.getElementById("tempo")
let resultado = document.getElementById("resultado")

let calculo = parseInt(deslocamneto.value) / parseInt(tempo.value)
resultado.innerHTML += calculo
}
function limpar(){

}
