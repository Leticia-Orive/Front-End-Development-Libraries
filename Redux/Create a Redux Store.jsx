//Crear una tienda Redux
/* Redux es un marco de gestión de estado que se puede usar con varias tecnologías web diferentes, incluido React.

En Redux, hay un solo objeto de estado que es responsable del estado completo de su aplicación. Esto significa que si tuviera una aplicación React con diez componentes, y cada componente tuviera su propio estado local, el estado completo de su aplicación estaría definido por un solo objeto de estado alojado en Redux store. Este es el primer principio importante que se debe comprender al aprender Redux: la tienda de Redux es la única fuente de verdad cuando se trata del estado de la aplicación.

Esto también significa que cada vez que cualquier parte de su aplicación quiera actualizar el estado, debe hacerlo a través de la tienda Redux. El flujo de datos unidireccional facilita el seguimiento de la gestión del estado en su aplicación.

Redux storees un objeto que contiene y administra la aplicación state. Hay un método llamado createStore()en el objeto Redux, que usa para crear el Redux store. Este método toma una reducerfunción como argumento requerido. La reducerfunción se cubre en un desafío posterior y ya está definida para usted en el editor de código. Simplemente toma statecomo argumento y devuelve state.

Declare una storevariable y asígnela al createStore()método, pasando como reducerargumento.

Nota: El código en el editor usa la sintaxis de argumentos predeterminados de ES6 para inicializar este estado para mantener un valor de 5. Si no está familiarizado con los argumentos predeterminados, puede consultar la sección ES6 en el plan de estudios que cubre este tema.*/
//Ejercicio
/* La tienda Redux debería existir.
La tienda Redux debe tener un valor de 5 para el estado.*/

const reducer = (state = 5) => {
  return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer);
