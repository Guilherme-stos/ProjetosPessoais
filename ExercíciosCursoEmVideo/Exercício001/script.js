function Gerar() {
    var txt = document.getElementById('txt')
    var res = document.getElementById('res')
    var tx = String(txt.value)
    res.innerHTML = `${tx}`

}