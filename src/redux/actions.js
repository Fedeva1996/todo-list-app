export const addTodo = (task) => ({
  type: "ADD_TODO",
  payload: {
    id: task.id,
    tarea: task.tarea,
    prioridad: task.prioridad,
  },
});
export const checkTodo = (task) => ({
  type: "ADD_TODO",
  payload: {
    task: task,
  },
});
export const deleteTodo = (id) => ({
  type: "ADD_TODO",
  payload: {
    id,
  },
});
export const listTodo = (id) => ({
  type: "LIST_TODO",
});
