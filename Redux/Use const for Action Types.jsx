//Use const para tipos de acción
/* Una práctica común cuando se trabaja con Redux es asignar tipos de acción como constantes de solo lectura y luego hacer referencia a estas constantes donde sea que se usen. Puede refactorizar el código con el que está trabajando para escribir los tipos de acción como constdeclaraciones.

Declare LOGIN y LOGOUT como constvalores y asígnelos a las cadenas 'LOGIN'y 'LOGOUT', respectivamente. Luego, edite authReducer()y los creadores de acciones para hacer referencia a estas constantes en lugar de valores de cadena.

Nota: generalmente es una convención escribir constantes en mayúsculas, y esta es una práctica estándar en Redux también.*/
//Ejercicio
/* Llamar a la función loginUser debería devolver un objeto con typela propiedad establecida en la cadena LOGIN.
Llamar a la función logoutUser debería devolver un objeto con typela propiedad establecida en la cadena LOGOUT.
La tienda debe inicializarse con un objeto con la propiedad loginestablecida en false.
El envío loginUser debe actualizar la loginpropiedad en el estado de la tienda a true.
El envío logoutUser debe actualizar la loginpropiedad en el estado de la tienda a false.
La authReducer función debe manejar múltiples tipos de acción con una declaración de cambio.
LOGINy LOGOUT deben declararse como constvalores y deben asignarse cadenas de LOGINy LOGOUT.
Los creadores de acciones y el reductor deben hacer referencia a las constantes LOGINy LOGOUT.*/
// change code below this line
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
// change code above this line

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };

    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
