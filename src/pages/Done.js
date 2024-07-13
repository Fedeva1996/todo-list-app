import React, { useReducer, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import { getTareas } from "../actions/TareasActions";
import listReducer from "../reducers/listReducer";
import Menu from "../Components/Menu";
import TodoDoneList from "../Components/TodoDoneList";

const Home = () => {
  const context = useContext(AuthContext);
  //console.log("context", context);
  const [nuevaLista, actualizarNuevaLista] = useState(false);
  // TODO: hacer get de todas las tareas existentes del usuario.
  const [lista, dispatch] = useReducer(listReducer, []);

  useEffect(() => {
    async function fetchData() {
      //console.log("email", context.currentUser.email)
      const tasks = await getTareas(context.currentUser.email);
      // console.log('tasks', tasks);
      dispatch({
        type: "initial",
        payload: tasks,
      });
      actualizarNuevaLista(false);
      //console.log("tasks", tasks);
      //console.log(lista)
    }
    fetchData();
  }, [nuevaLista]);

  const borrarTarea = (id) => {
    // setLista(lista.filter((item) => item.id !== id));
    dispatch({
      type: "borrar",
      id,
    });
  };
  const checkTarea = (objetoTarea) => {
    // setLista([...lista, objetoTarea]);
    console.log("checkeando", objetoTarea);
    dispatch({
      type: "chequear",
      payload: objetoTarea,
    });
  };

  //console.log(lista);
  return (
    <div className="flex min-h-screen w-screen flex-1 flex-col items-center">
      <Menu />
      <div className="mt-5 w-full max-w-xl rounded-lg bg-gray-900 p-6 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-50 dark:text-gray-50">
          Todo done list
        </h1>
        <TodoDoneList
          lista={lista}
          borrarTarea={borrarTarea}
          checkTarea={checkTarea}
        />{" "}
      </div>
    </div>
  );
};

export default Home;
