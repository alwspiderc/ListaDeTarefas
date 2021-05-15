let enviar = document.querySelector('#enviar')
let arrayTarefas = []


enviar.addEventListener('click', (ent) => {
    let tarefas = document.querySelector('#tarefas')
    
    verificarCampo(tarefas.value)

    let ul = document.querySelector('#tarefa-adicionada')

    adicionarTarefas(tarefas.value)
});


function verificarCampo(tarefas){
    let verificado

    if(tarefas.length == 0){
        alert('Por favor, digite uma tarefa.')
    }

    return verificado
}

function adicionarTarefas(tarefas){
    let li = montarLi(tarefas)
    let ul = document.querySelector('#tarefa-adicionada')
    ul.appendChild(li)

}

function montarLi(tarefas){
    let li = document.createElement('li')
    li.innerHTML = '<input type="checkbox" id="tarefa-na-lista" name="tarefa-na-lista">'
    li.innerHTML += `<label for="tarefa-na-lista">${tarefas}</label>`
    
    let button = document.createElement('button')
    button.classList.add('botaoLixo')
    button.innerHTML = `<i class="fa fa-trash"></i>`

    li.appendChild(button)

    return li
}


