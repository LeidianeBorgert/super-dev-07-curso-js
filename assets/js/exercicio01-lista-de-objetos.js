//Criar uma lista de 7 carros com os atributos (marca, placa, modelo, data de emplacamento, cor).
let carros = [
    {
        "marca": "Fiat",
        "placa": "MKP-5617",
        "modelo": "Mobi",
        "data_de_emplacamento": "2018-08-19",
        "cor": "Azul"

    },
    {
        "marca": "Chevrolet",
        "placa": "KMZ-8920",
        "modelo": "Astra",
        "data_de_emplacamento": "2008-05-22",
        "cor": "Prata"

    },
    {
        "marca": "Kia",
        "placa": "JSP-5641",
        "modelo": "Sorento",
        "data_de_emplacamento": "2025-04-06",
        "cor": "Preto"

    },
    {
        "marca": "Renault",
        "placa": "LTM-5612",
        "modelo": "Clio",
        "data_de_emplacamento": "1996-01-16",
        "cor": "Verde"

    },
    {
        "marca": "Fiat",
        "placa": "WOP-7896",
        "modelo": "Palio",
        "data_de_emplacamento": "1995-10-02",
        "cor": "Branco"

    },
    {
        "marca": "Kia",
        "placa": "MND-8956",
        "modelo": "Soul",
        "data_de_emplacamento": "2022-07-13",
        "cor": "Bege"

    },
    {
        "marca": "Ford",
        "placa": "GHR-3312",
        "modelo": "Ka",
        "data_de_emplacamento": "2000-03-28",
        "cor": "Vermelho"

    },

]
//a) Criar uma lista de string com as marcas a partir da lista de carros (utilizar map)
let carroMarcas = carros.map(carro => carro.marca)

//b) Criar uma lista de objetos com placa, modelo da lista de carros (utilizar map)
const carroModelo = carros.map(carro => {
    return {
        placa: carro.placa,
        modelo: carro.modelo
    };
});

//c) Criar uma lista de string com os modelos filtrando por marca Fiat (lista de string)
const filtroFiat = carros.filter(carro => carro.marca === "Fiat")
    .map(filtroFiat => filtroFiat.marca + " " + filtroFiat.modelo);

//d) Criar uma lista de (marca, modelo) filtrando por Azul
const corCarro = carros.filter(carro => carro.cor === "Azul")
    .map(corCarro => corCarro.marca + " " + corCarro.modelo);

//e) Criar uma lista filtrando por ano de emplacamento 2025

let anoCarro2025 = carros.filter(carro => {
    let dataEmplacamento = new Date(carro.data_de_emplacamento);
    if (dataEmplacamento.getFullYear() == 2025) {
        return true;
    } else {
        return false;

    }
});











