let custos, doacao, dizimo, divida; 

custos = parseFloat(prompt ("Custo Mensal:"));
doacao = perseFloat(prompt ("Doação Mensal: "));
dizimo = perseFloat(prompt ("Dízimo diário: "));

divida = custos - doacao - dizimo;

console.log("/\nSaldo devedor: " + divida);
("\nSaldo devedor: " + divida); 