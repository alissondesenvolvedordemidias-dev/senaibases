function mostrarDiaDaSemana(){
    //informações
    let numero, dia 
    //leitura
    numero = Number(prompt("Digita o número: "))
    //processamento
    if(numero == 1){
        dia= "Domingo"
    }else if(numero == 2){
        dia = "Segunda"
    }else if(numero == 3){
        dia = "Terça"
    }else if(numero == 4){
        dia ="Quarta"
    }else if(numero == 5){
        dia = "Quinta"
    }else if(numero == 6){
        dia = "Sexta"
    }else if(numero == 7){
        dia = "Saábado"
    }else{
        dia="Erro #f22d, dia não encontrado."
    }
    //sáida
    document.getElementById('resultado').innerHTML = 'Dia escolhido: ' + dia
}

function calcularUber(){
    // informações
    let distancia, tempoSegundos
    const velocidade = 300000
    // entradas
    distancia= Number(prompt("Distância"))
    // processamentos
    tempoSegundos = distancia/velocidade 

    // saídas
    resposta.innerHTML = 'Tempo: ' + tempoSegundos + 'segundo(s)'

    // segunda etapa
    if(tempoSegundos > 60) {
        tempoMinutos = tempoSegundos/60
        resposta.innerHTML+= '<br>Ou ' + tempoMinutos + 'minuto(s)'
    } 
     if (tempoMinutos >60) {
    tempoHoras = tempoMinutos/60 
    elementoResultado.innerHTML += "<br>" + tempoHoras + 'hora(s)'
    }
    if (tempoHoras > 24){
        tempoDias = tempoHoras/24
}
}
function olaMundo() {
    // 1. Damos nomes diferentes para cada "caixa"
    let saudacao = "Olá Mundo";
    let clima = "O dia está lindo!";
    let observacao = "A noite é estrelada: ";
    let sensacao = "A sala está fria.";

    // 2. Agora usamos essas variáveis
    console.log(saudacao);
    console.log(clima);
    
    // 3. O alerta do jeito certo (com parênteses)
    alert(saudacao);

// 4. Para o código rodar, você precisa chamar a função aqui fora!
// Dica: A chamada é apenas o nome dela com parênteses.

}
function minhaIdade() {
    // informações
    let idade = 26;
    let nome = "Alisson Machado"; 
    console.log(idade);
    // processamento
    idade = Number(prompt("Digite a idade:"))
    // let resposta = ("Qual a sua idade?");
    // = ("minha idade");
    // = ("Ano que vem: " + minhaIdade);
    alert (idade)

    idade = idade + 1

    alert("Ano que vem: " + idade)
}
function pepequeno(){
    let numero= 50
    let quantidade= 50
    quantidade= quantidade + numero
    alert('Quantidade: ' + numero)
    //valor total por loja
    valorTotal= preço*quantidade
    alert("escreva quanto a loja vai receber R$: " + valorTotal)

}