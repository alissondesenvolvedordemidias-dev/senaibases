function calcularPrecoBrique(){
    // INFOS 
    let precoCompra, precoVenda
    // LEITURAS
    precoCompra = Number (prompt("Preço de compra: "))
    // PROCESAMENTO
    precoCompra = precoCompra * 3 
    // SAÍDAS
    console.log("Preço para venda: R$" + precoVenda, toFixed(2));
    alert("Preço para venda: R$" + precoVenda, toFixed(2));
    document.getElementById("resultado").innerHTML = "Preço para venda: R$"
    = precoVenda.toFixed(2)
}