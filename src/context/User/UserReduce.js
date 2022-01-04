import { GET_USERS, GET_PROFILE } from "../Types";

// Importamos los nombres para tomar los tipos de acciones como se muestra arriba
// Después le pasamos dos parametros, el estado y la acción
export default (state, action) => {
  // Usando destructiring tomamos el payload(data) y el type(Getp profile, get users)
  // Y se lo asignamos a la acción
  const { payload, type } = action;

  switch (type) {
    // Dependiendo del tipo (getUsers, getProfile) hará una copia de lo que se encuentra en el estado y seguido de eso le pasamos el payload(data) a esas variables
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };

    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };

    default:
      return state;
  }
};
