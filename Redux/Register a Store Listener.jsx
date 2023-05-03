//Registrar un Oyente de Tienda
/* Otro método al que tiene acceso en el storeobjeto Redux es store.subscribe(). Esto le permite suscribir funciones de escucha a la tienda, que se llaman cada vez que se envía una acción contra la tienda. Un uso simple para este método es suscribir una función a su tienda que simplemente registra un mensaje cada vez que se recibe una acción y se actualiza la tienda.

Escriba una función de devolución de llamada que incremente la variable global countcada vez que la tienda reciba una acción y pase esta función al store.subscribe()método. Verá que store.dispatch()se llama tres veces seguidas, cada vez que pasa directamente un objeto de acción. Mire la salida de la consola entre los despachos de acción para ver cómo se realizan las actualizaciones.*/
//Ejercicio
/* Despachar la ADDacción en la tienda debería incrementar el estado en 1.
Debe haber una función de escucha suscrita a la tienda usando store.subscribe.
El store.subscribedebe recibir una función.
La devolución de llamada store.subscribetambién debe incrementar la variable global counta medida que se actualiza la tienda.*/
const ADD = "ADD";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const add = () => count++;
store.subscribe(add);

// Change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
