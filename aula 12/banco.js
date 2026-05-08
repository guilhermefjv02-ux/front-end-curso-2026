const numeroConta = 1
let titular = "Guilherme"
let saldo = 600
let contaAtiva = true
let statusconta
const historico = []

const elSaldo = document.querySelector('#saldo')
const elMensagem = document.querySelector('#mensagem')
const btnDepositar = document.querySelector('#btn-depositar')
const btnSacar = document.querySelector('#btn-sacar')
const btnBloquear = document.querySelector('#btn-Bloquear')
const eltotalDepositos = document.querySelector('#total-depositos')
const eltotalSaques = document.querySelector('#total-saques')
const eltotalTransacoes = document.querySelector('#total-transacoes')

btnDepositar.addEventListener('click', () => {
    const campValor = document.querySelector('#campo-valor')
    const valor = Number(campValor.value)
    depositar(valor)
})

btnSacar.addEventListener('click', () => {
    const campValor = document.querySelector('#campo-valor')
    const valor = Number(campValor.value)
    sacar(valor)
})

btnBloquear.addEventListener('click', bloquearConta)

function bloquearConta() {
    if (contaAtiva) {
        contaAtiva = false
        exibirmensagem('\nconta bloqueada com sucesso!', 'sucesso')
        btnBloquear.textContent = 'Desbloquear conta'
    } else {
        contaAtiva = true
        exibirmensagem('\nconta desbloqueada com sucesso!', 'sucesso')
        btnBloquear.textContent = 'Bloquear conta'
    }
 }



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
    if (!contaAtiva) {
        exibirmensagem("\nconta bloqueada. Não é possível realizar depósitos.")
        return
    }
    if (valor > 0) {
        saldo += valor
        historico.push(`depósito: R$ ${valor.toFixed(2)} | saldo: R$ ${saldo.toFixed(2)}`)
        exibirmensagem(`\ndepósito de R${valor.toFixed(2)} realizado com sucesso!
        \nnovo saldo: R$ ${saldo.toFixed(2)}`, 'sucesso')
        atualizarsaldo()
        verResumo()

    } else {
        exibirmensagem("\nvalor de depósito inválido.O valor deve ser maior que zero.")
    }
}

function sacar(valor) {
    if (!contaAtiva) {
        exibirmensagem("\nconta bloqueada. Não é possível realizar saques.")
        return
    }
    if (valor > 0 && valor <= saldo) {
        saldo -= valor
        historico.push(`saque: R$ ${valor} | saldo: R$ ${saldo}`)
        console.log(`\nsaque de R$ ${valor.toFixed(2)} realizado com sucesso!\nnovo saldo: R$ ${saldo.toFixed(2)}`)
        atualizarsaldo()
        verResumo()
    } else {
        exibirmensagem("\nvalor de saque inválido. O valor deve ser maior que zero e menor ou igual ao saldo.")
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

/* function simulartentativasSaque( valor, maxtentativas){
    let tentativa = 0
    while( tentativa < maxtentativas) {
        if(valor < 1000000){
            
        }
    }
} */

(`#mensagem`)

function atualizarsaldo() {
    elsaldo.textContent = `R$ ${saldo.toFixed(2)}`

}

function exibirmensagem(texto, tipo) {
    elmensagem.textContent = texto
    elmensagem.style.display = 'block'
    elmensagem.className = tipo == 'sucesso' ? 'msg-sucesso' : 'msg-erro'
}

function verResumo() {
    let totalDepositos = 0
    let totalSaques = 0
    let totalTransacoes = 0

    for( const transacao of historico) {
        if(transacao.includes('depósito')) {
            totalDepositos++
        } else {
            totalSaques++
        }
        totalTransacoes++
    }
    eltotalDepositos.textContent = totalDepositos
    eltotalSaques.textContent = totalSaques
    eltotalTransacoes.textContent = totalTransacoes
}

function simulartentativasSaque(valor, maxTentativas) {
}

    