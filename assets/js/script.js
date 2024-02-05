let counter = 1;

function adicionar() {
    const tarefaInpt = document.querySelector('input#insere-tarefa');
    const tarefaList = document.querySelector('ul#lista-tarefa');

    (tarefaInpt.value.length !== 0) ? adicionarTarefa(tarefaInpt, tarefaList) : window.alert('tarefa vazia');

}

// gera id para os itsens da lista
function gerarId() {
    return counter++
}

// cria tarefa para ser incluida na lista de tarefas;
function criarTarefa(tarefa) {
    const li = document.createElement('li');
    li.id = gerarId();
    li.innerHTML = `<input type="checkbox" class='checkbox'>
                    <span> ${tarefa}</span>
                    <input type="button" value="-" onclick="removerTarefa(${li.id})">`
    return li;
}

// adiciona tarefa na lista
function adicionarTarefa(tarefaInpt, tarefaList) {
    const novaTarefa = criarTarefa(tarefaInpt.value);
    tarefaList.appendChild(novaTarefa); // adiciona a tarefa na lista de tarefas.
    tarefaInpt.value = ''; // limpa o input
}

//remove tarefa da lista
function removerTarefa(id) {
    const tarefaList = document.querySelector('ul#lista-tarefa');
    const rmvTarefa = document.getElementById(id)

    if (rmvTarefa) { // valida se o item a ser removido está na lista
        tarefaList.removeChild(rmvTarefa);
        return window.alert('tarefa removida');
    };
}
