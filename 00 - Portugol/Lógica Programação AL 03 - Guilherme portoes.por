programa {
  funcao inicio() {
    inteiro clt, estagiarios, pj, total

    // Entrada de dados
    escreva("Digite a quantidade de devs CLT: ")
    leia(clt)

    escreva("Digite a quantidade de estagiários: ")
    leia(estagiarios)

    escreva("Digite a quantidade de devs PJ: ")
    leia(pj)

    // Cálculo do total
    total = clt + estagiarios + pj

    // Exibição do resultado
    escreva("\nA empresa de Guilherme Portões tem o número total de funcionarios de \n ", total, "\n devs na equipe. \n")

  }
}
