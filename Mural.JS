function ajustarFonte(classe, tamanhoInicial, tamanhoMinimo){

    const elementos = document.querySelectorAll(classe);

    elementos.forEach(function(elemento){

        let tamanho = tamanhoInicial;
        elemento.style.fontSize = tamanho + "px";

        while(
            elemento.scrollWidth > elemento.clientWidth &&
            tamanho > tamanhoMinimo
        ){
            tamanho -= 0.5;
            elemento.style.fontSize = tamanho + "px";
        }

    });

}

function ajustarTudo(){

    ajustarFonte(".titulo-mulher",17,10);
    ajustarFonte(".txt-mulher",16,9);

}

window.addEventListener("load", ajustarTudo);
window.addEventListener("resize", ajustarTudo);