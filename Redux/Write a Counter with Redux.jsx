//Escribir un contador con Redux
/* ¡Ahora has aprendido todos los principios básicos de Redux! Ha visto cómo crear acciones y creadores de acciones, crear una tienda Redux, enviar sus acciones contra la tienda y diseñar actualizaciones de estado con reductores puros. Incluso ha visto cómo administrar un estado complejo con una composición reductora y manejar acciones asincrónicas. Estos ejemplos son simplistas, pero estos conceptos son los principios básicos de Redux. Si los comprende bien, está listo para comenzar a crear su propia aplicación Redux. Los siguientes desafíos cubren algunos de los detalles relacionados con statela inmutabilidad, pero primero, aquí hay una revisión de todo lo que has aprendido hasta ahora.

En esta lección, implementará un contador simple con Redux desde cero. Los conceptos básicos se proporcionan en el editor de código, ¡pero tendrá que completar los detalles! Use los nombres que se proporcionan y defina incActionlos decActioncreadores de acciones, los tipos de acción y y, finalmente, Redux . Una vez que haya terminado, debería poder enviar acciones para incrementar o disminuir el estado que se encuentra en el archivo . ¡Buena suerte construyendo tu primera aplicación Redux!counterReducer()INCREMENTDECREMENT store INCREMENTDECREMENT store*/
//Ejercicio
/*El creador de la acción incAction debe devolver un objeto de acción typeigual al valor de INCREMENT
El creador de la acción decAction debe devolver un objeto de acción typeigual al valor de DECREMENT
La tienda Redux debería inicializarse con un state valor de 0.
El envío incAction en la tienda Redux debería incrementar state en 1.
El envío decAction en la tienda Redux debería disminuir state en 1.
counterReducer debería ser una función */

const INCREMENT = "INCREMENT"; // Define a constant for increment action types
const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type: INCREMENT,
  };
}; // Define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT,
  };
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
