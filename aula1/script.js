console.log("Teste em javascript");

//Variaveis
var animal = "gato";
console.log(animal);

let nomeCompleto = "Fulano da Silva"
console.log(nomeCompleto)

var valor1;
const valor0 = 10;
console.log(valor0);

valor1 = 12;
valor1 = 15; // var permite retribuição
// valor 0 = 14; -- const, não permite retribuição

// verificação de tipos
console.log(typeof valor1);

// algoritimo: entrada + processamento + saída
var nome = window.prompt("Nome: ");
console.log("Seja bem-vindo " + nome + " Aproveite!");
console.log(`Seja bem-vindo ${nome}, Aproveite`); // template literal
document.writeln(` Seja bem-vindo(a) ${nome} Aproveite,`);

// operadores aritméticos + - * / **
// 2 + 4 * 2


// operadores de comparação: < > <= >= == != === !==
 console.log(5 == '5'); // igualdade -> olha apenas os valores
 console.log(5 === '5'); // estritamente igual olhar para o tipo e valor

 //Criar um algoritmo que realize a soma de dois numeros;
 // O usuario deverá informar os numeros e você deve apresentar o resultado

 let numero1 = Number(prompt("Digite o primeiro número"));
 let numero2 = Number (prompt("Digite o segundo numero"));
 let soma = numero1 + numero2;
alert("A soma e: " + soma);
document.writeln(`A soma do ${numero1} + ${numero2} é = ${soma}`);
console.log(`A soma do ${numero1} + ${numero2} é = ${soma}`);

//estruturas condicionais: if-else, switch-case
var idade = (prompt("Digite sua idade: "))
if (idade >=18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

var hora = (prompt("Digite quantas horas sao: "))
if (hora < 12) {
    console.log("Bom-Dia!")
} else if (hora <18) {
    console.log ("Boa-tarde");
} else {
    console.log("Boa-noite")
}

var diaSemana = (prompt ("digite o dia da semana: "))
switch (diaSemana) {
    case 1:
        console.log("domingo");
        break;
    case 2: 
        console.log ("segunda-feira");
        break;
    default:
        console.log("escolha uma opcao");
    }

//estruturas de repetição;
for (let i=0; i<5; i++){
    console.log("interacao" +i);
}

var i=5;
while(i<5){
    console.log("interacao" + i)
    i++;
}