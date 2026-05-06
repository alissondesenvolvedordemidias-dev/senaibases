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