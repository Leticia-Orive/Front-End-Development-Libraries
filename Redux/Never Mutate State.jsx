//Nunca mutar estado
/* Estos desafíos finales describen varios métodos para hacer cumplir el principio clave de la inmutabilidad del estado en Redux. El estado inmutable significa que nunca modifica el estado directamente, sino que devuelve una nueva copia del estado.

Si tomó una instantánea del estado de una aplicación Redux a lo largo del tiempo, vería algo como state 1, state 2, state 3, state 4, ...etc., donde cada estado puede ser similar al anterior, pero cada uno es un dato distinto. Esta inmutabilidad, de hecho, es lo que proporciona características tales como la depuración de viajes en el tiempo de las que quizás haya oído hablar.

Redux no impone activamente la inmutabilidad del estado en su tienda o reductores, esa responsabilidad recae en el programador. Afortunadamente, JavaScript (especialmente ES6) proporciona varias herramientas útiles que puede usar para hacer cumplir la inmutabilidad de su estado, ya sea un string, number, arrayo object. Tenga en cuenta que las cadenas y los números son valores primitivos y son inmutables por naturaleza. En otras palabras, 3 es siempre 3. No puede cambiar el valor del número 3. Sin embargo, un arrayo es mutable. objectEn la práctica, su estado probablemente consistirá en una arrayo object, ya que estas son estructuras de datos útiles para representar muchos tipos de información.

Hay un storey reduceren el editor de código para gestionar las tareas pendientes. Termine de escribir el ADD_TO_DOcaso en el reductor para agregar una nueva tarea pendiente al estado. Hay algunas formas de lograr esto con JavaScript estándar o ES6. Vea si puede encontrar una manera de devolver una nueva matriz con el elemento action.todoagregado al final.*/
//Ejercicio
/* La tienda Redux debe existir e inicializarse con un estado igual al de la todosmatriz en el editor de código.
addToDoy immutableReducer ambos deben ser funciones.
Despachar una acción de tipo ADD_TO_DOen la tienda Redux debe agregar un todoelemento y NO debe cambiar el estado.*/

const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code",
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo,
  };
};

const store = Redux.createStore(immutableReducer);
