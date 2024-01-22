//Mensagem de boas vindas
alert("Boas Vindas ao jogo do número secreto");

//declarando as variáveis
//Fazendo a variável numeroSecreto trocando aleatóriamente os números secretos utilizando a função parseInt e Math.random
/*"Math.random()" vai gerar um número entre 0 e 1 como: 0.546846352143, 0.1654184635213 etc. como queremos um número entre 1 e 10 
vamos multiplicar o Math.random por 10 para poder tirar da casa decimal. Agora ele irá gerar números como: 5.46846352143, 1.654184635213, etc.
Só que o nós não queremos as casas decimais, então utilizamos a função "parseInt()" para excluir a casa decimal dos resultados do Math.random. E para incluir
o número 10 na contagem, adicionamos "+ 1" para que ele possa gerar um número aleatório entre 1 e 10
*/
//A variável multiplicador está sendo utilizada para tornar automática a alteração dela no prompt do "while"
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute 
let tentativas = 1;

//Enquanto - estrutura de repetição para que o jogo continue rodando até acertar o númeor secreto
while(chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //Estrutura condicional para descobrir se o número informado é o número secreto
    if(chute == numeroSecreto){
        break;
    }
    else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }
        else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //soma de tentativas usadas para acertar o número secreto
        tentativas++
    }
}

//Operador ternário para organizar melhor a meneira de mostrar a palavra tentativas(as) no código
//Tentativas é maior que 1? Caso sim: escrever tentativas. Caso não seja maior que 1 (:), escreva tentativa
let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`

//Condicional para corrigir o erro de português para quando acertado com 1 tentativa
if(tentativas > 1){
    alert(`Isso ai! VocÊ descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
}
else{
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
}

console.log(numeroSecreto)