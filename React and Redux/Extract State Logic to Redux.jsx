//Extraer lógica de estado a Redux
/* Ahora que terminó el componente React, necesita mover la lógica que está realizando localmente stateen Redux. Este es el primer paso para conectar la sencilla aplicación React a Redux. La única funcionalidad que tiene su aplicación es agregar nuevos mensajes del usuario a una lista desordenada. El ejemplo es simple para demostrar cómo funcionan juntos React y Redux.

Primero, defina un tipo de acción ADDy configúrelo en const ADD. A continuación, defina un creador de acciones addMessage()que cree la acción para agregar un mensaje. Deberá pasar un correo electrónico messagea este creador de acciones e incluir el mensaje en el archivo action.

Luego, cree un reductor llamado messageReducer()que maneje el estado de los mensajes. El estado inicial debe ser igual a una matriz vacía. Este reductor debe agregar un mensaje a la matriz de mensajes mantenidos en el estado o devolver el estado actual. Por último, crea tu tienda Redux y pásale el reductor.*/
//Ejercicio
/* La const ADDdebe existir y tener un valor igual a la cadenaADD
El creador de la acción addMessagedebe devolver un objeto typeigual ADDe messageigual al mensaje que se pasa.
messageReducerdebe ser una función.
La tienda debe existir y tener un estado inicial establecido en una matriz vacía.
El envío addMessagecontra la tienda debe agregar inmutablemente un nuevo mensaje a la matriz de mensajes mantenidos en el estado.
Debería messageReducerdevolver el estado actual si se llama con otras acciones.*/
// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";
const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};
const messageReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD:
      return [...previousState, action.message];
      break;
    default:
      return previousState;
  }
};
const store = Redux.createStore(messageReducer);
