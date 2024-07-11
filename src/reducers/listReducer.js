export default function listaReducer(lista, accion) {
  switch (accion.type) {
    case "agregar":
      return [
        {
          id: accion.id,
          tarea: accion.tarea,
          done: false,
          prioridad: accion.prioridad,
        },
        ...lista,
      ];
    case "borrar":
      return lista.filter((tarea) => tarea.id !== accion.id);
    case "chequear":
      return lista
        .map((tarea) => {
          if (tarea.id === accion.task.id) {
            return accion.task;
          } else {
            return tarea;
          }
        })
        .sort((a, b) => a.done - b.done);
    default:
      return lista;
  }
}
