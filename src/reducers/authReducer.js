export default function authReducer(state, action) {
  // state: el estado actual dentro de nuestro store
  // action: Recibimos el objeto enviado por el dispatch
  //     type: Contiene el tipo de accion que queremos ejecutar
  //     payload: Contiene el valor que queremos actualizar en nuestro estado(state)
  // actualizar los valores del currentUser -> SET_CURRENT_USER
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        authenticated: !!action.payload.email, // !!'' = false o !!'julia@email.com' = true
        email: action.payload.email,
      };
    case "DELETE_CURRENT_USER":
      return {
        ...state,
        authenticated: false,
        email: "",
      };
    default:
      return state;
  }
}
