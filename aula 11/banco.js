const numeroConta = 1
let titular = "Guilherme"
let saldo = 600
let contaAtiva = true
let statusconta
const historico = []

function verExtrato() {
    if (contaAtiva) {
        statusconta = "Ativa"
    }
    else {
        statusconta = "bloqueado"
    }
    console.log("===== banco inovabank ======"
    )
    console.log(`conta: ${numeroConta}`)
    console.log(`titular: ${titular}`)
    console.log(`saldo: R$ ${saldo.toFixed(2)}`)
    console.log(`status: ${statusconta}`)
}

function depositar(valor) {
    if (valor > 0) {
        saldo += valor
        historico.push(`depósito: R$ ${valor} | saldo: R$ ${saldo}`)
        console.log(`\ndepósito de R${valor.toFixed(2)} realizado com sucesso!
        \nnovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("\nvalor de depósito inválido.O valor deve ser maior que zero.")
    }
}

function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        historico.push(`saque: R$ ${valor} | saldo: R$ ${saldo}`)
        console.log(`\nsaque de R$ ${valor.toFixed(2)} realizado com sucesso!\nnovo saldo: R$ ${saldo.toFixed(2)}`)

    } else {
        console.log("\nvalor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.")
    }

}

/* verExtrato()
depositar(200)
sacar(300)
verExtrato() */


verExtrato()
depositar(150)
sacar(100)

console.log(historico)

for (let i = historico.length - 1; i >= 0; i--) {
    console.log(`${i}: ${historico[i]}`)
}

for (let i = 1; i < 6; i++) {
    const indiceAtual = historico.length - i
    console.log(`${i}: ${historico[indiceAtual]}`)
}


function versresumo() {
    let ndepositos = 0
    let nsaques = 0
    let totaltransacoes = 0

    for (let i = 0; i < historico.length; i++) {
        if (historico[i].includes("depósito")) {
            ndepositos++
        } else {
            nsaques++
        }
        totaltransacoes++
    }

    console.log("\n=========resumo de transacoes==========")
    console.log(`depósitos: ${ndepositos}`)
    console.log(`saques: ${nsaques}`)
    console.log(`total: ${totaltransacoes} transacoes`)
}

function simulartentativasSaque( valor, maxtentativas){
    let tentativa = 0
    while( tentativa < maxtentativas $$ valor > saldo) {
        console.log(`tentativa ${tentativa + 1}: R$ ${valor.toFixed(2)} falhou. Saldo insuficiente.`)
        if(valor < 1000000){
            
        }
    }
}
