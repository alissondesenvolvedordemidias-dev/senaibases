//Fora da função global.
let cont = 0
function incrementarContagem(){
    // Dentro da função local.
    cont = cont + 1
    document.getElementById('p-contagem').innerHTML = cont
}







let global = 'Eu sou uma variável glocal ;/'
function funcao1(){
    let local = 'Sou uma variável local :D'
    console.log(local);
    console.log(global);
    

}
function funcao2(){
    console.log(global);
    // console.log(local); Aqui deu erro, lembrar deste erro. 
}


// funcao1()
// funcao2()