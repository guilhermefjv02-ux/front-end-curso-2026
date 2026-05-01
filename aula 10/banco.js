const numeroConta = 1
let titular = "Guilherme"
let saldo = 600
let contaAtiva = true
let statusconta

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
        console.log(`\ndepósito de R${valor.toFixed(2)} realizado com sucesso!
        \nnovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("\nvalor de depósito inválido.O valor deve ser maior que zero.")
    }
}

function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        console.log(`\nsaque de R$ ${valor.toFixed(2)}realizado com sucesso!\nnovo saldo: R$ ${saldo.toFixed(2)}`)
    } else {
        console.log("\nvalor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.")
    }

}

/* verExtrato()
depositar(200)
sacar(300)
verExtrato() */

function bloquearconta(){
    contaAtiva = false
}

verExtrato()
bloquearconta()
verExtrato()