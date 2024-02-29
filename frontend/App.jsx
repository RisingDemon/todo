import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setState] = useState([]);

  function fetchtodos() {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      console.log(json);
      const data =json.todos[0];
      console.log(data);
      setState(data);
    });
  };

  return (
    <div>
      <CreateTodo />
      <button onClick={fetchtodos}>fetch todos</button>
      <Todos todos={todos}></Todos>
      {/* <p>{todos}</p> */}
    </div>
  );
}

export default App;
