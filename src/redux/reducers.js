import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let usuario = "Federico";
      let nuevaTarea = {
        id: action.payload.id,
        tarea: action.payload.tarea,
        done: false,
        prioridad: action.payload.prioridad,
      };
      if (usuario) {
        nuevaTarea = {
          ...nuevaTarea,
          usuario,
        };
      }
      nuevaTarea = {
        id: action.payload.id,
        tarea: action.payload.tarea,
        done: false,
        prioridad: action.payload.prioridad,
      };
      //create fetch to post in backend
      const enviarTarea = async (action) => {
        try {
          const response = await fetch("http://localhost:3001/tarea", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(action.payload),
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      enviarTarea(action.payload);
    },
    checkTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
      state.todos.sort((a, b) => a.done - b.done);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, checkTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
