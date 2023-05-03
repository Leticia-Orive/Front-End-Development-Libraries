//Utilice el operador de propagación en matrices
/* Una solución de ES6 para ayudar a hacer cumplir la inmutabilidad del estado en Redux es el operador de propagación: .... El operador de propagación tiene una variedad de aplicaciones, una de las cuales se adapta bien al desafío anterior de producir una nueva matriz a partir de una matriz existente. Esta es una sintaxis relativamente nueva, pero de uso común. Por ejemplo, si tiene una matriz myArrayy escribe:

let newArray = [...myArray];
newArrayahora es un clon de myArray. Ambas matrices todavía existen por separado en la memoria. Si realiza una mutación como newArray.push(5), myArrayno cambia. ...Distribuye efectivamente los valores en myArrayuna nueva matriz. Para clonar una matriz pero agregar valores adicionales en la nueva matriz, puede escribir [...myArray, 'new value']. Esto devolvería una nueva matriz compuesta por los valores myArrayy la cadena new valuecomo último valor. La sintaxis de propagación se puede usar varias veces en una composición de matriz como esta, pero es importante tener en cuenta que solo hace una copia superficial de la matriz. Es decir, solo proporciona operaciones de matriz inmutables para matrices unidimensionales.

Utilice el operador de propagación para devolver una nueva copia del estado cuando se agrega una tarea pendiente.*/
//Ejercicio
/* La tienda Redux debe existir e inicializarse con un estado igual a ["Do not mutate state!"].
addToDoy immutableReducer ambos deben ser funciones.
Despachar una acción de tipo ADD_TO_DOen la tienda Redux debe agregar un todoelemento y NO debe cambiar el estado.
El operador de propagación debe usarse para devolver un nuevo estado.*/

const immutableReducer = (state = ["Do not mutate state!"], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      // don't mutate state here or the tests will fail
      let arr = [...state, action.todo];
      return arr;
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: "ADD_TO_DO",
    todo,
  };
};

const store = Redux.createStore(immutableReducer);
