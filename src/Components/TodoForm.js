import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts";

const TodoForm = (props) => {
  const { handleAddTarea } = props;
  const [tarea, setTarea] = useState("");
  const context = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(tarea)
    let nuevaTarea = {
      name:tarea,
      done: false,
      userEmail: context.currentUser.email || null,
    };
    console.log(nuevaTarea)
    const datosSolicitud = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify(nuevaTarea),
    };
    handleAddTarea(nuevaTarea);
    // fetch(url, datosSolicitud)

    const handlePostReq = async () => {
      const request = await fetch(
        new Request("http://localhost:3001/tarea"),
        datosSolicitud,
      );
      const data = await request.json();
      console.log("data", data);
    };
    handlePostReq();
    setTarea("");
  };


  return (
    <div className={`shadow-gray-500/50 rounded-md shadow-md`}>
      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col items-center justify-between lg:flex-row"
      >
        <input
          className={`w-full border border-gray-700 px-4 py-2 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-transparent rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50`}
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Añadir nueva tarea"
        />
      </form>
    </div>
  );
};

export default TodoForm;
