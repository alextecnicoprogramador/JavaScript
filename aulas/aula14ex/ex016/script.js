function contar() {
    var vi = document.getElementById('inicio')
    var vf = document.getElementById('fim')
    var vp = document.getElementById('passo')
    if (vi.value.length == 0|| vf.value.length == 0 ||vp.value.length == 0) {
        window.alert('[ERRO] faltam dados!')
    } else {
        var i = Number(vi.value)
        var f = Number(vf.value)
        var p = Number(vp.value)
        if (f > i) {
            var c = ' '
            do {
                c += `${i} \u{1f449}`
                i += p
            } while (f>=i)
            res.innerHTML = c
        } else {
            var x = ' '
            for (c=i; c>=f; c-=p) {
                x += `${c} \u{1f449}`
            }
            res.innerHTML = x
        }
        res.innerHTML += `FIM`
    }
    
}