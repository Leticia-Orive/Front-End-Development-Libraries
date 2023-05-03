//Use middleware para manejar acciones asincrónicas
/*Hasta ahora estos desafíos han evitado discutir acciones asincrónicas, pero son una parte ineludible del desarrollo web. En algún momento, deberá llamar a puntos finales asincrónicos en su aplicación Redux, entonces, ¿cómo maneja este tipo de solicitudes? Redux proporciona middleware diseñado específicamente para este propósito, llamado middleware Redux Thunk. Aquí hay una breve descripción de cómo usar esto con Redux.

Para incluir el middleware Redux Thunk, lo pasa como argumento a Redux.applyMiddleware(). Luego, esta declaración se proporciona como un segundo parámetro opcional para la createStore()función. Eche un vistazo al código en la parte inferior del editor para ver esto. Luego, para crear una acción asíncrona, devuelve una función en el creador de la acción que toma dispatchcomo argumento. Dentro de esta función, puede enviar acciones y realizar solicitudes asíncronas.

En este ejemplo, se simula una solicitud asíncrona con una setTimeout()llamada. Es común enviar una acción antes de iniciar cualquier comportamiento asíncrono para que el estado de su aplicación sepa que se están solicitando algunos datos (este estado podría mostrar un icono de carga, por ejemplo). Luego, una vez que recibe los datos, envía otra acción que transporta los datos como una carga útil junto con la información de que la acción se completó.

Recuerda que estás pasando dispatchcomo parámetro a este creador de acciones especiales. Esto es lo que usará para despachar sus acciones, simplemente pasa la acción directamente a despachar y el middleware se encarga del resto.

Escriba ambos despachos en el handleAsync()creador de acciones. Envío requestingData()antes de setTimeout()(la llamada a la API simulada). Luego, después de recibir los datos (simulados), envíe la receivedData()acción, pasando estos datos. Ahora ya sabe cómo manejar acciones asincrónicas en Redux. Todo lo demás sigue comportándose como antes. */
//Ejercicio
/* El requestingData creador de la acción debe devolver un objeto de tipo igual al valor de REQUESTING_DATA.
El receivedData creador de la acción debe devolver un objeto de tipo igual al valor de RECEIVED_DATA.
asyncDataReducerdebe ser una función.
El envío del requestingData creador de la acción debería actualizar la statepropiedad de la tienda de obtener a true.
El envío handleAsync debe enviar la acción de solicitud de datos y luego enviar la acción de datos recibidos después de un retraso.*/
const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function (dispatch) {
    // dispatch request action here

    dispatch(requestingData());

    setTimeout(function () {
      let data = {
        users: ["Jeff", "William", "Alice"],
      };
      // dispatch received data action here

      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
