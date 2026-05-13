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
const elListaHistorico = document.querySelector("#lista-historico")

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



function verExtrato(transacao) {
    if (contaAtiva) {
        statusconta = "Ativa"
    }
    else {
        statusconta = "bloqueado"
    }
    historico.push(transacao)
    const elListaVazia = document.querySelector('.historico-vazio')
    if (elListaVazia) elListaVazia.remove() // Remove o aviso de "Nenhuma transação" se existir

    const item = document.createElement('li')
    item.textContent = transacao
    elListaHistorico.insertBefore(item, elListaHistorico.firstChild) // Insere o item no início da lista

    while (elListaHistorico.children.length > 5) {
        elListaHistorico.removeChild(elListaHistorico.lastChild)
    }

}

function depositar(valor) {
    if (!contaAtiva) {
        exibirmensagem("\nconta bloqueada. Não é possível realizar depósitos.")
        return
    }
    if (valor > 0) {
        saldo += valor
        verExtrato(`depósito: R$ ${valor.toFixed(2)} | saldo: R$ ${saldo.toFixed(2)}`)
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
        verExtrato(`saque: R$ ${valor} | saldo: R$ ${saldo}`)
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


/* verExtrato()
depositar(150)
sacar(100) */

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


function atualizarsaldo() {
    elSaldo.textContent = `R$ ${saldo.toFixed(2)}`

}

function exibirmensagem(texto, tipo) {
    elMensagem.textContent = texto
    elMensagem.style.display = 'block'
    elMensagem.className = tipo == 'sucesso' ? 'msg-sucesso' : 'msg-erro'
}

function verResumo() {
    let totalDepositos = 0
    let totalSaques = 0
    let totalTransacoes = 0

    for (const transacao of historico) {
        if (transacao.includes("depósito")) {
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
const btnLimparHistorico = document.querySelector('#btn-limpar-historico')

btnLimparHistorico.addEventListener('click', limparHistorico)
function limparHistorico() {
    // limpa o array
    historico.length = 0

    // remove todos os itens da lista
    elListaHistorico.innerHTML = ''

    // recria o placeholder
    const itemVazio = document.createElement('li')
    itemVazio.textContent = 'Nenhuma transação realizada ainda'
    itemVazio.classList.add('historico-vazio')

    elListaHistorico.appendChild(itemVazio)

    // atualiza resumo
    verResumo()

    exibirmensagem('\nNenhuma transação realizada ainda!', 'sucesso')
}
function atualizarsaldo() {
    elSaldo.textContent = `R$ ${saldo.toFixed(2)}`

    if (saldo > 5000) {
        elSaldo.style.color = 'green'
    } else if (saldo > 1000 && saldo <= 5000) {
        elSaldo.style.color = 'yellow'
    } else {
        elSaldo.style.color = 'red'
    }
}

const campoTitular = document.querySelector('#campo-titular')
const elNomeTitular = document.querySelector('#nome-titular')

campoTitular.addEventListener('input', () => {
    titular = campoTitular.value

    elNomeTitular.textContent = titular
})
