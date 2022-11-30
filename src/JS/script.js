let lista = document.querySelectorAll(".item")
console.log(lista);


function btnEsquerda() {
   let exibido = document.querySelector(".exibir")

    for (let i = 0; i < lista.length; i++) {
        if (exibido == lista[i]) {
            exibido.classList.remove("exibir")
            lista[i-1].classList.add("exibir")
        }
    }
}

function btnDireita() {
    let exibido = document.querySelector(".exibir")

    for (let i = 0; i < lista.length; i++) {
        if (exibido == lista[i]) {
            exibido.classList.remove("exibir")
            lista[i+1].classList.add("exibir")
        }
    }
}