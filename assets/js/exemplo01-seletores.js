function somar() {
    //Pegar um elemento da tela por id
    //elemento id="numero1"
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let soma = numero1 + numero2;

    alert("Soma: " + soma);

}
//Subtrair
//Multiplicar
//Dividir

function subtrair() {
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let subtrair = numero1 - numero2;

    alert("Subtrair: " + subtrair);

}
function mutiplicar() {
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let mutiplicar = numero1 * numero2;

    alert("Mutiplicação: " + mutiplicar);

}

function divisao() {
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let divisao = numero1 / numero2;

    alert("Divisão: " + divisao);

}

//function definirCorAzul() {
//  let itens = document.getElementsByClassName("item");

//  for (i = 0; i < itens.length; i = i + 1) {
//       let item = itens[i];
///     item.style.backgroundColor = "#34b4de";
//   }
//itens[0].style.backgroundColor = "#34b4de";
// itens[1].style.backgroundColor = "#34b4de";
// itens[2].style.backgroundColor = "#34b4de";
// itens[3].style.backgroundColor = "#34b4de";
//  console.log(itens);
//}



function definirCor(nomeCor) {
    let itens = document.getElementsByClassName("item");

    let cor = "";
    if (nomeCor === "azul") {
        cor = "#34b4de";
    } else if (nomeCor === "roxo") {
        cor = "#6959CD";
    } else if (nomeCor === "verde") {
        cor = "#00FF7F";
    } else if (nomeCor === "preto") {
        cor = "#000000";
    } else if (nomeCor === "vermelho") {
        cor = "#FF0000"
    }

    for (i = 0; i < itens.length; i = i + 1) {
        let item = itens[i];
        item.style.backgroundColor = cor;
    }

}

function alterarVisibilidade() {
    let iframes = document.getElementsByTagName("iframe");


    if (iframes[0].style.display === "inline") {
        iframes[0].style.display = "none";
    } else {
        iframes[0].style.display = "inline";
    }

}
function limparCampos() {
    let campoNome = document.getElementsByName("nome")[0];
    campoNome.value = "";
    let campoSobrenome = document.getElementsByName("sobrenome")[0];
    campoSobrenome.value = "";
    let resultado = document.getElementById("resultadoNomes");
    resultado.innerText = "";

}

function apresentarNomeCompleto() {
    let campoNome = document.getElementsByName("nome")[0];
    let campoSobrenome = document.getElementsByName("sobrenome")[0];

    let nome = campoNome.value;
    let sobrenome = campoSobrenome.value;

    let nomeCompleto = `${nome} ${sobrenome}`;
    let resultado = document.getElementById("resultadoNomes");
    resultado.innerText = `Nome completo: ${nomeCompleto}`;

}
function exemploQuerySelector() {
    let paragrafo = document.querySelector("div#jogos p");
    //adicionar uma classe ao elemento
    paragrafo.classList.add("alernativo");
}
function exemploQuerySelectorAll() {
    let paragrafos = document.querySelectorAll("div#jogos p ");
    for (i = 0; i < paragrafos.length; i = i + 1) {
        let paragrafo = paragrafos[i];
        if (i % 2 == 0) {
            //adicionar uma classe destaque ao elemento
            paragrafo.classList.add("destaque");
        } else {
            paragrafo.classList.add("elegante");
        }
    }
}
function reset() {
    let paragrafos = document.querySelectorAll("div#jogos p");
    for (i = 0; i < paragrafos.length; i = i + 1) {
        let paragrafo = paragrafos[i];
        //aqui, o ...(spread) expande todas as classes atuais do elemento, removendo todas de uma vez.
        paragrafo.classList.remove(...paragrafo.classList);
    }
}