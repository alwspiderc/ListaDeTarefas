const inputTarefa = document.querySelector("#tarefas");
const botaoEnviar = document.querySelector("#enviar");
const listaTarefas = document.querySelector("#tarefa-adicionada");
const botaoLixo = document.querySelector(".botaoLixo");
const tarefas = ["teste"];

botaoEnviar.addEventListener("click", (e) => {
  verificarCampo();
});

inputTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    verificarCampo();
  }
});

botaoLixo.addEventListener("click", (e) => {
  excluirTarefa();
});

const adicionarTarefas = () => {
  const nomeTarefa = inputTarefa.value;
  tarefas.push(nomeTarefa);
  listarTarefas();
};

const verificarCampo = () => {
  const nomeTarefa = inputTarefa.value;
  if (nomeTarefa == "") {
    alert("Digite uma tarefa no campo!");
  } else {
    if (nomeTarefa == tarefas[tarefas.length - 1]) {
      alert("Voês já digitou essa tarefa!");
    } else {
      adicionarTarefas();
    }
  }
};

const listarTarefas = () => {
  listaTarefas.innerHTML = "";
  for (let tarefa of tarefas) {
    const li = document.createElement("li");
    li.innerHTML = `<li>
    <input type="checkbox" id="tarefa-na-lista" name="tarefa-na-lista">
    <label for="tarefa-na-lista">${tarefa}</label>
    <button class="botaoLixo" id="1">
      <i class="fa fa-trash"></i>
    </button>`;
    listaTarefas.appendChild(li);
  }
};

