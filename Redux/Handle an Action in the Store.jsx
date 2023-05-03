//Manejar una acción en la tienda
/* Después de crear y enviar una acción, la tienda Redux necesita saber cómo responder a esa acción. Este es el trabajo de una reducerfunción. Los reductores en Redux son responsables de las modificaciones de estado que tienen lugar en respuesta a las acciones. A reducertoma statey actioncomo argumentos, y siempre devuelve un nuevo state. Es importante ver que este es el único papel del reductor. No tiene efectos secundarios: nunca llama a un punto final de API y nunca tiene sorpresas ocultas. El reductor es simplemente una función pura que toma estado y acción, luego devuelve un nuevo estado.

Otro principio clave en Redux es que statees de solo lectura. En otras palabras, la reducerfunción siempre debe devolver una nueva copia statey nunca modificar el estado directamente. Redux no impone la inmutabilidad del estado, sin embargo, usted es responsable de hacerlo cumplir en el código de sus funciones reductoras. Practicarás esto en desafíos posteriores.

El editor de código tiene el ejemplo anterior, así como el inicio de una reducerfunción para usted. Rellene el cuerpo de la reducerfunción para que, si recibe una acción de tipo, 'LOGIN'devuelva un objeto de estado con loginel valor true. De lo contrario, devuelve el actual state. Tenga en cuenta que el actual statey el enviado actionse pasan al reductor, por lo que puede acceder al tipo de acción directamente con action.type.*/
//Ejercicio
/* Llamar a la función loginActiondebería devolver un objeto con la propiedad de tipo establecida en la cadena LOGIN.
La tienda debe inicializarse con un objeto con la propiedad loginestablecida en false.
El envío loginActiondebe actualizar la loginpropiedad en el estado de la tienda a true.
Si la acción no es de tipo LOGIN, la tienda debería devolver el estado actual.*/

const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === "LOGIN") {
    return {
      login: true,
    };
  } else {
    return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};
