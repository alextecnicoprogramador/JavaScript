function calcular() {
    var c = 1
    let tab = document.getElementById('seltab')
    var vn = document.getElementById('num')
    if (vn.value.length == 0) {
        window.alert("por favor digite um número")
    } else {
        var n = Number(vn.value)
        tab.innerHTML = ''
        do {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c ++
        } while (c<=10)
        res.innerHTML = r
}
}
