//declaração de variáveis

var nome = "Prof. Madson";
var sobrenome = "Aguiar Rodrigues";

console.log("Instrução solta em um arquivo JS");

//Declaração de função

function exibirNomeConsole(){
    console.log("exibir nome: " + nome);
}
  
function exibirNomeCompleto(){
    console.log("Professor, nome completo " + nome + " " + sobrenome);
}

function eventoClick(){
    alert("Você clicou em um botão!");
}

//Chamadas de função

exibirNomeConsole();