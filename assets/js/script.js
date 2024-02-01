let counter = 1;

function adicionar() {
    const tarefaInpt = document.querySelector('input#insere-tarefa');
    const tarefaList = document.querySelector('ul#lista-tarefa');

    let novaTarefa = criarTarefa(tarefaInpt.value);
    tarefaList.appendChild(novaTarefa); // adiciona a tarefa na lista de tarefas.
}

// gera id para os itens da lista
function gerarId() {
    return counter++
}

// cria tarefa para ser incluida na lista de tarefas;
function criarTarefa(tarefa) {
    let li = document.createElement('li');
    li.id = gerarId();
    li.innerHTML = `<input type="checkbox" class='checkbox'><span> ${tarefa}</span>`
    return li;
}