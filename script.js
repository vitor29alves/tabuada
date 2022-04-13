function calcularTabuada() {
    let inputTabuada = document.getElementById("inputNumber");
    let valorTabuada = inputTabuada.value;

    let title = document.getElementById("title");



    if (valorTabuada == 0) {

        resultado.innerHTML = `<p>O valor não pode ser 0</p>`

    } else {

        title.innerHTML = `Tabuada do ${valorTabuada}`

        let resultado = document.getElementById("resultado");

        resultado.innerHTML =  `<p>  ${valorTabuada}  x  1 = ${valorTabuada * 1} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  2 = ${valorTabuada * 2} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  3 = ${valorTabuada * 3} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  4 = ${valorTabuada * 4} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  5 = ${valorTabuada * 5} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  6 = ${valorTabuada * 6} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  7 = ${valorTabuada * 7} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  8 = ${valorTabuada * 8} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  9 = ${valorTabuada * 9} </p>`
        resultado.innerHTML += `<p>  ${valorTabuada}  x  10 = ${valorTabuada * 10} </p>`

    }

}


var btn = document.querySelector("#refresh");
btn.addEventListener("click", function () {

    location.reload();
});