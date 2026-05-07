import React, { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    const tarefa = {
      id: Date.now(),
      texto: novaTarefa,
      concluida: false,
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa("");
  };

  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className="lista">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="item">
            <span
              className={tarefa.concluida ? "concluida" : ""}
              onClick={() => alternarConclusao(tarefa.id)}
            >
              {tarefa.texto}
            </span>

            <button
              className="remover"
              onClick={() => removerTarefa(tarefa.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}