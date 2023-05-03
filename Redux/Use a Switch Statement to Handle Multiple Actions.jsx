//Use una declaración de cambio para manejar múltiples acciones
/* Puede decirle a la tienda Redux cómo manejar múltiples tipos de acción. Digamos que está administrando la autenticación de usuario en su tienda Redux. Desea tener una representación de estado para cuando los usuarios inician sesión y cuando cierran sesión. Representas esto con un solo objeto de estado con la propiedad authenticated. También necesita creadores de acciones que creen acciones correspondientes al inicio y cierre de sesión del usuario, junto con los propios objetos de acción.

El editor de código tiene una tienda, acciones y creadores de acciones configurados para usted. Complete la reducerfunción para manejar múltiples acciones de autenticación. Use una switchdeclaración de JavaScript en el reducerpara responder a diferentes eventos de acción. Este es un patrón estándar al escribir reductores Redux. La declaración de cambio debe cambiar action.typey devolver el estado de autenticación apropiado.

Nota: En este punto, no se preocupe por la inmutabilidad del estado, ya que en este ejemplo es pequeña y simple. Para cada acción, puede devolver un nuevo objeto, por ejemplo, {authenticated: true}. Además, no olvide escribir un defaultcaso en su declaración de cambio que devuelva el actual state. Esto es importante porque una vez que su aplicación tiene varios reductores, todos se ejecutan cada vez que se realiza un envío de acción, incluso cuando la acción no está relacionada con ese reductor. En tal caso, debe asegurarse de devolver el archivo actual state.*/
//Ejercicio
/* Llamar a la función loginUser debería devolver un objeto con la propiedad de tipo establecida en la cadena LOGIN.
Llamar a la función logoutUser debería devolver un objeto con la propiedad de tipo establecida en la cadena LOGOUT.
La tienda debe inicializarse con un objeto con una authenticated propiedad establecida en false.
El envío loginUser debe actualizar la authenticated propiedad en el estado de la tienda a true.
El envío logoutUser debe actualizar la authenticated propiedad en el estado de la tienda a false.
La authReducer función debe manejar múltiples tipos de acción con una switch declaración.*/

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true,
      };
    case "LOGOUT":
      return {
        authenticated: false,
      };
    default:
      return defaultState;
  }

  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
