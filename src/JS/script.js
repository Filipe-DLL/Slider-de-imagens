let lista = document.querySelectorAll(".item")
console.log(lista);

function btnEsquerda() {
    let exibido = document.querySelector(".exibir")
    let x = 0
    
    lista.forEach(indice => {

        if (exibido == indice) {
            exibido.classList.remove("exibir")
            lista[x - 1].classList.add("exibir")
        }
        x++
    })
}

function btnDireita() {
    let exibido = document.querySelector(".exibir")
    let x = 0

    lista.forEach(indice => {

        if (exibido == indice) {
            exibido.classList.remove("exibir")
            lista[x + 1].classList.add("exibir")
        }
        x++
    })
}