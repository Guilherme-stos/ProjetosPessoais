function gerar() {
    let txt = document.getElementById('txt')
    let res = document.getElementById('res')
    let nome = String(txt.value)

    res.innerHTML = `Olá ${nome}, seja bem vindo(a)!!!`
}