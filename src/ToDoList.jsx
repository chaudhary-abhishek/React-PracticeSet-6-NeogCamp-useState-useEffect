import { fakeFetch } from "./api/toDoFakeFetch";
import { useEffect, useState } from "react";

export const ToDoList = () => {
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    try {
      setIsLoading((isLoading) => (isLoading = true));
      const { status, data } = await fakeFetch("https://example.com/api/todos");
      if (status === 200) {
        setTodo((todo) => (todo = data.todos));
        setIsLoading((isLoading) => (isLoading = false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <hr />
      <h2>Question-2</h2>
      <h2>To Do List</h2>
      <div>{isLoading && "Loading..."}</div>
      <ul>
        {todo.map(({ title, desc, todos }) => {
          return (
            <li style={{ listStyle: "none", textAlign: "left" }}>
              <h3>
                {title} : {desc}
              </h3>
              <ol>
                {todos.map((currentToDo) => (
                  <li>{currentToDo}</li>
                ))}
              </ol>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
