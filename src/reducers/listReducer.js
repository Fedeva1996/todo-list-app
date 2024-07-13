export default function listaReducer(lista, accion) {
  switch (accion.type) {
    case "initial":
      return accion.payload;
    case "agregar":
      return [
        {
          id: accion._id,
          tarea: accion.tarea,
          done: false,
          prioridad: accion.prioridad,
        },
        ...lista,
      ];
    case "borrar":
      return lista.filter((tarea) => tarea._id !== accion._id);
    case "chequear":
      console.log(accion)
      return lista
        .map((tarea) => {
          if (tarea._id === accion.payload._id) {
            return accion.payload;
          } else {
            return tarea;
          }
        })
        .sort((a, b) => a.done - b.done);
    default:
      return lista;
  }
}
