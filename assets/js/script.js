let counter = 1;

function adicionar() {
    const tarefaInpt = document.querySelector('input#insere-tarefa');
    const tabelaTarefa = document.querySelector('table#resultado-tbl');
    /**
     * Tarefa 1
     * ['T', 'a', 'r', 'e', 'f', 'a', ' ', '1']
     *   0    1    2    3    4    5    6    7  
     * 
     */
    (tarefaInpt.value.length !== 0) ? addTarefa(tarefaInpt, tabelaTarefa) : window.alert('tarefa vazia');
   
}

// gera id para os itens da tabela
function gerarId() {
    return counter++
}

// adiciona uma nova tarefa
function addTarefa(tarefaInpt, tabelaTarefa){
    // insere <tr>
    const novaLinha = tabelaTarefa.insertRow(-1); // -1 insere a nova linha no final da tabela
    novaLinha.id = gerarId();
    // insere <td>
    const coluna1 = novaLinha.insertCell(0);
    const coluna2 = novaLinha.insertCell(1);
    const coluna3 = novaLinha.insertCell(2);

    // preenche <td>
    coluna1.innerHTML = `<input type="checkbox" class='checkbox' onchange="riscarTarefa(this, ${novaLinha.id})">`
    coluna2.innerHTML = `<span>${tarefaInpt.value}</span>`;
    coluna3.innerHTML = `<input type="button" class="remover-btn" value="-" onclick="removerTarefa(${novaLinha.id})">` 
    
    tarefaInpt.value = ''; // limpa o input
}

// risca uma tarefa com base no comportamento do checkbox
function riscarTarefa(checkbox, id) {
    const tr = checkbox.parentElement.parentElement;
    checkbox.checked ? tr.classList.add('checked') : tr.classList.remove('checked')
}

// remove uma tarefa da tabela
function removerTarefa(id) {
    const delTarefa = document.getElementById(id)
    delTarefa ? delTarefa.parentNode.removeChild(delTarefa) : window.alert('Tarefa não encontrada')
}
