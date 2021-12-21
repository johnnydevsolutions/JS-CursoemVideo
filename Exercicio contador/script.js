function  contar() {
    var ini =  document.getElementById('txt1')     
    var fim = document.getElementById('txtf')
    var passo = document.getElementById ('txtp')
    var res = document.getElementById ('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Faltam dados!')
        res.innerHTML = `Impossivel contar!`
    
    } else {
        res.innerHTML= 'Contando:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido!')
        }
        if (i < f) {
       //Contagem crescente
    
       for ( var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c}\u{2705}`
        }
       //Contagem decrescente
       
        } else {
            for ( var c = i; c >= f ;  c-= p) {
                res.innerHTML += `${c} \u{2705}`
            }
   }
    res.innerHTML += `\u{2705}`
}
}