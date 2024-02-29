import React from "react";

export function Todos({ todos }) {
  console.log(todos);
  return (
    <div >
      {todos.map((todo) => (
        <div key={todo.id}>
          <h4>{todo.title}</h4>
          <h4>{todo.description}</h4>
          <button>{todo.completed ? "completed" : "mark as complete"}</button>
        </div>
      ))}
    </div>
  );
}
