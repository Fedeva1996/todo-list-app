// Las acciones que necesitamos construir y hacer accesibles en nuestra app:
// - set user = setear nuestro usuario
// - login user = llamada a la api para setear el usuario
// - logout user = borrar el token y borrar el current user (signica asignar valor nulo en current user)
import { jwtDecode } from "jwt-decode";

// esta accion devuelve un objeto accion que se va a enviar con el dispatch
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: {
      email: user.email,
    },
  };
};
// esta accion recibir las credenciales y va enviar las credenciales a la API
// con la respuesta de la API va a enviar el email con el dispatch
export const loginUser = async (credentials, dispatch) => {
  console.log("AuthActions: loginUser()");
  // loguearle al usuario
  const path = "http://localhost:3001/api/login";
  const body = credentials; //{ email: '', password: ''}
  // enviar la consulta al servidor
  fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok === true) {
        // recibir el token de la respuesta del servidor
        const token = data.token;
        // guardar el token en el window.localStorage
        localStorage.setItem("jwt", token);
        const decodedToken = jwtDecode(token); // { email: 'email del usuario'}
        console.log("Setting currentUser", decodedToken);
        dispatch({
          type: "SET_CURRENT_USER",
          payload: {
            email: decodedToken.email,
          },
        });
        return 'done';
      } else {
        console.log("Setting empty currentUser");
        dispatch({
          type: "SET_CURRENT_USER",
          payload: {
            email: "",
          },
        });
        return 'error';
      }
    });
};

// esta accion va a borrar el token del localStorage y va a mandar un currentUser vacio al dispatch
export const logoutUser = () => {
  localStorage.removeItem("jwt");
  return {
    type: "SET_CURRENT_USER",
    payload: {
      email: "",
    },
  };
};
