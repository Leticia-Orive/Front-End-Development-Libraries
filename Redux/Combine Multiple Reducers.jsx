//Combine múltiples reductores
/* Cuando el estado de su aplicación comienza a volverse más complejo, puede ser tentador dividir el estado en varias partes. En su lugar, recuerda el primer principio de Redux: todo el estado de la aplicación se mantiene en un solo objeto de estado en la tienda. Por lo tanto, Redux proporciona una composición reductora como solución para un modelo de estado complejo. Usted define múltiples reductores para manejar diferentes partes del estado de su aplicación, luego componga estos reductores en un solo reductor raíz. Luego, el reductor de raíz se pasa al createStore()método Redux.

Para permitirnos combinar varios reductores, Redux proporciona el combineReducers()método. Este método acepta un objeto como argumento en el que se definen propiedades que asocian claves a funciones reductoras específicas. El nombre que le dé a las claves será utilizado por Redux como el nombre del estado asociado.

Por lo general, es una buena práctica crear un reductor para cada parte del estado de la aplicación cuando son distintas o únicas de alguna manera. Por ejemplo, en una aplicación para tomar notas con autenticación de usuario, un reductor podría manejar la autenticación mientras que otro maneja el texto y las notas que envía el usuario. Para tal aplicación, podríamos escribir el combineReducers()método así:

const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
Ahora, la clave notescontendrá todo el estado asociado con nuestras notas y manejado por nuestro notesReducer. Así es como se pueden componer múltiples reductores para gestionar estados de aplicación más complejos. En este ejemplo, el estado contenido en la tienda Redux sería un solo objeto que contiene authy notespropiedades.

Hay counterReducer()funciones authReducer()proporcionadas en el editor de código, junto con una tienda Redux. Termina de escribir la rootReducer()función usando el Redux.combineReducers()método. Asignar counterReducera una tecla llamada countya authReduceruna tecla llamada auth.*/
//Ejercicio
/* El counterReducer debe incrementar y decrementar el state.
El debe authReducer alternar state entre y .authenticated true false
La tienda state debe tener dos claves: count, que contiene un número y auth, que contiene un objeto. El authobjeto debe tener una propiedad de authenticated, que contiene un valor booleano.
The rootReducer debería ser una función que combine the counterReducer y the authReducer.*/

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer = (state = { authenticated: false }, action) => {
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

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
}); // Define the root reducer here

const store = Redux.createStore(rootReducer);
