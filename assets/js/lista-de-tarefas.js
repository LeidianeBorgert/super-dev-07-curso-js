let body = document.getElementsByTagName("body")[0];//o numero serve para saber em qual posição esta 
let ol = document.createElement("ol");

//TIUTLO
function criarTitulo() {
    let h1 = document.createElement("h1");
    h1.innerText = "Minhas Tarefas do Curso SuperDev";
    h1.classList.add("titulo");

    body.appendChild(h1);
}
//PARAGRAFO
function criarParagrafo() {
    let p = document.createElement("p");
    p.innerText = "Curso super dev é um curso com varias linguagens de programação envolvida ";
    p.classList.add("paragrafo");

    body.appendChild(p);
}
//CRIAR LISTA TAREFA
function criarTarefa() {
    let input = document.createElement("input");
    input.id = "campo-tarefa";
    input.setAttribute("type", "text");
    input.placeholder = "Digite sua tarefa."
    input.addEventListener("keyup",clicarEnter);

    let label = document.createElement("label");
    label.setAttribute("for", "campo-tarefa");
    label.innerText = "Adicionar Tarefa: ";

    body.appendChild(label);
    body.appendChild(input);


    // div.appendChild(label);
    // div.appendChild(input);
    //body.appendChild(div);
    //let div = document.createElement("div")
}
//CRIADO A LISTA ORDENADA
function criarListaOrdenada() {
    body.appendChild(ol);
}
//CRIAR LISTA DE ITEM ORDENADO
function criarItem(tarefa) {
    let li = document.createElement("li");
    li.innerText = tarefa;
    ol.appendChild(li);
}
//CRIAR BOTÃO
function criarBotaoRegistrar() {
    let botao = document.createElement("button");
    botao.setAttribute("type", "button");
    botao.innerText = "Registrar";

    botao.addEventListener("click", registrar);

    body.appendChild(botao);

}
//BOTÃO REGISTRAR
function registrar() {
    let input = document.getElementById("campo-tarefa");
    let inputData = document.getElementById("campo-data");
    let item = input.value;
    let itemData = inputData.value;
    criarItem(`${item} Data a realizar: ${itemData}`);
  


    input.value = "";
    input.focus()
    inputData.value = "";
    inputData.focus()
}
//EVENTO DE CLICAR ENTER PARA ENVIAR
function clicarEnter(evento){
    if(evento.key === "Enter"){
        registrar();
    }

}
function criarData() {
    let input = document.createElement("input");
    input.id = "campo-data";
    input.setAttribute("type", "date");
    input.addEventListener("keyup",clicarEnter);

    let label = document.createElement("label");
    label.setAttribute("for", "campo-data");
    label.innerText = "Data da tarefa: ";

    body.appendChild(label);
    body.appendChild(input);
}

criarTitulo()
criarParagrafo();
criarListaOrdenada();
criarTarefa();
criarBotaoRegistrar();
criarData();

