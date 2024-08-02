
var n = document.getElementById('num')
var tab = document.getElementById('tabela')
var c = 1
var res = document.querySelector('div#res')
let valores = []
function addnum() {
    if (isNumero(n.value) && !inLista(n.value, valores)) {
        valores.push(Number(n.value))
        let item = document.createElement("option")
        item.text = `Valor ${n.value} adicionado`
        tab.appendChild(item)
    } else {
        window.alert ("Número inválido ou já existe na lista")
    }
    n.value = ''
    n.focus()
    res.innerHTML = ''
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar")
    }else {
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]
        let r = ''
        let c = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/(valores.length)
        res.innerHTML = `<br>Ao todo temos ${valores.length} números cadastrados`
        res.innerHTML += `<br>O maior valor informado foi ${maior}`
        res.innerHTML += `<br>O menor valor informado foi ${menor}`
        res.innerHTML += `<br>Somando todos os valores, temos ${soma}`
        res.innerHTML += `<br>A média dos valores é ${media}`
    }
    
}