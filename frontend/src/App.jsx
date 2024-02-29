import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setState] = useState([]);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);
 async function fetchtodos() {
    await fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      console.log(json);
      const data =json.todos;
      console.log(data);
      setState(data)
    });
  };
  
  return (
    <div>
      <CreateTodo />
      <button onClick={fetchtodos}>fetch todos</button>
      <p>{todos.title}</p>
     {todos ? <Todos todos={todos}></Todos>:<div></div>}
    </div>
  );
}

export default App;
