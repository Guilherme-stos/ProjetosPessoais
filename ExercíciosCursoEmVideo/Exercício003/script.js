function calcular() {
    let num1 = document.getElementById('numb1')
    let num2 = document.getElementById('numb2')
    let res = document.getElementById('res')
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let soma = n1 + n2
    let mult = n1 * n2
    let divis = n1 / n2 
    res.innerHTML = `<p>A soma dos números é ${soma}.</p>`
     
    res.innerHTML += `<p>A multiplicação dos números é ${mult}</p>`

    res.innerHTML += `<p>A divisão dos números é ${divis}</p>`

}