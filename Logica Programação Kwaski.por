programa {
  funcao inicio() {
    //criar as variaveis
    inteiro qtdRelatoriosPF
    inteiro qtdRelatoriosPJ
    inteiro tempoRelatoriosPF
    inteiro tempoRelatoriosPJ

    real valorTotalPF
    real valorTotalPJ
    inteiro qtdTotal
    inteiro tempoTotal
    real valorTotal
    real mediaValorPF
    real mediaValorPJ
    real mediaTempoPF
    real mediaTempoPJ

    //leitura dos dados
    escreva("Quantidade de relatórios PF: ")
    leia (qtdRelatoriosPF) 
    escreva("Quantidade de relatórios PJ: ")
    leia (qtdRelatoriosPJ) 
    
    escreva("Tempo gasto nos relatórios PF(horas): ")
    leia(tempoRelatoriosPF)
    escreva("Tempo gasto nos relatórios PJ(horas): ")
    leia(tempoRelatoriosPJ)

    escreva("Valor dos relatorios PF: R$")
    leia (valorTotalPF) 
    escreva("Valor dos relatorios PJ: R$")
    leia (valorTotalPJ)

    //processar/calcular
    qtdTotal = qtdRelatoriosPF + qtdRelatoriosPJ
    tempoTotal = tempoRelatoriosPF + tempoRelatoriosPJ
    valorTotal = valorTotalPF+valorTotalPJ
    mediaTempoPF = valorTotalPF / qtdRelatoriosPJ
    mediaTempoPJ = valorTotalPF / qtdRelatoriosPJ
    mediaTempoPF = tempoRelatoriosPF / qtdRelatoriosPF
    mediaTempoPJ = tempoRelatoriosPJ / qtdRelatoriosPJ


    //apresentar os dados
    escreva("\nQuantidade total (PF+PJ): " + qtdTotal)  
    escreva ("\nTempo total (PF+PJ), em horas): " + tempoTotal)
    escreva ("\nValor total (PF+PJ): R$"+valorTotal)
    escreva ("\nMédia de valor por rel, PF: R$"+ mediaTempoPF)
    escreva ("\nMédia de valor por rel, PJ: R$"+ mediaTempoPJ)
    escreva ("\nMédia tempo por rel, PF (horas): "+ mediaTempoPF)
    escreva ("\nMédia tempo por rel, PJ (horas): "+ mediaTempoPJ)
  }
}
