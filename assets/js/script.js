let counter = 1;

function adicionar() {
    const tarefaInpt = document.querySelector('input#insere-tarefa');
    const tarefaList = document.querySelector('ul#lista-tarefa');
    
    (tarefaInpt.value.length !== 0) ? adicionarTarefa(tarefaInpt, tarefaList) : window.alert('tarefa vazia');

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

function adicionarTarefa(tarefaInpt, tarefaList){
    let novaTarefa = criarTarefa(tarefaInpt.value);
    tarefaList.appendChild(novaTarefa); // adiciona a tarefa na lista de tarefas.
    tarefaInpt.value = ''; // limpa o input
}
