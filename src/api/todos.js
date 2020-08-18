export const getTodos = async () => {
  const response = await fetch("http://localhost:3333/todos");

  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

export const createTodos = async () => {
  const addtodo = await fetch("http://localhost:3333/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "New", date: "now" }),
  });
  if (!addtodo.ok) {
    throw addtodo;
  }

  const currenttodos = await getTodos();
  console.log(currenttodos);

  return currenttodos;
};
