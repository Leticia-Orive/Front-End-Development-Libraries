//Enviar un evento de acción
/* dispatchEl método es lo que usa para enviar acciones a la tienda Redux. Llamar store.dispatch()y pasar el valor devuelto por un creador de acciones envía una acción de regreso a la tienda.

Recuerde que los creadores de acciones devuelven un objeto con una propiedad de tipo que especifica la acción que ha ocurrido. Luego, el método envía un objeto de acción a la tienda Redux. Según el ejemplo del desafío anterior, las siguientes líneas son equivalentes y ambas envían la acción de tipo LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
La tienda Redux en el editor de código tiene un estado inicializado que es un objeto que contiene una loginpropiedad actualmente establecida en false. También hay un creador de acciones llamado loginAction()que devuelve una acción de tipo LOGIN. Envíe la LOGINacción a la tienda Redux llamando al dispatchmétodo y pase la acción creada por loginAction().*/
//Ejercicio
/* Llamar a la función loginAction debería devolver un objeto con type la propiedad establecida en la cadena LOGIN.
La tienda debe inicializarse con un objeto con la propiedad loginestablecida en false.
El store.dispatch() método debe usarse para enviar una acción de tipo LOGIN.*/
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
store.dispatch(loginAction());
