let tarefas = []
let mensagem = "Tarefa adicionada com sucesso!"
function adicionarTarefa() {
    
    //document.getElementById("mensagem").textContent = mensagem;

    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    if (tarefa == "") {
        //mensagem.style.color = '#A34743'
        mensagem = "ERRO: Você não pode adicionar uma tarefa vazia!"
    }
    else {
        //mensagem.style.color = '#28A745'
        tarefas.push(tarefa)
        renderizarTarefas()
    }
    document.getElementById("mensagem").textContent = mensagem;
    
    inputTarefa.value = ""
}


function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    //for na lista
    //1. Item inicial (interador)
    //2. Item final (condição)
    //3. Se vai de 1 em 1 elemento ou se pula

    //for (interador, condição, frequência)
    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)
        
        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarfa(i)

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }

    function removerTarefa(i) {
        tarefas.splice(i, 1)
        renderizarTarefas()
        mensagem = document.getElementById("mensagem")
        mensagem.textContent = "Tarefa excluída com sucesso!"
    }
    function editarTarfa(i) {
        let tarefaEditada = prompt("Edite a tarefa: ")
        if (tarefaEditada.trim() !== "") {
            tarefas[i] = tarefaEditada
            renderizarTarefas()
            mensagem = document.getElementById("mensagem")
            mensagem.textContent = "Tarefa editada com sucesso!"
        }
        else {
            mensagem = document.getElementById("mensagem")
            mensagem.textContent = "ERRO: Você não pode adicionar uma tarefa vazia!"
        }
    }
}

function limparLista() {
    tarefas.length = 0
    tarefas.innerHTML = ""
    renderizarTarefas()
    mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas excluída com sucesso!"
}