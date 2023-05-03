//Enviar datos de acción a la tienda
/* A estas alturas, ha aprendido cómo enviar acciones a la tienda Redux, pero hasta ahora estas acciones no han contenido ninguna información que no sea un archivo type. También puede enviar datos específicos junto con sus acciones. De hecho, esto es muy común porque las acciones generalmente se originan a partir de alguna interacción del usuario y tienden a llevar consigo algunos datos. La tienda Redux a menudo necesita conocer estos datos.

Hay un creador básico notesReducer()y otro addNoteText()de acción definidos en el editor de código. Termina el cuerpo de la addNoteText()función para que devuelva un actionobjeto. El objeto debe incluir una typepropiedad con un valor de ADD_NOTEy también una textpropiedad establecida para los notedatos que se pasan al creador de la acción. Cuando llame al creador de la acción, pasará información de nota específica a la que puede acceder para el objeto.

Luego, termine de escribir la switchdeclaración en el formato notesReducer(). Debe agregar un caso que maneje las addNoteText()acciones. Este caso debe activarse siempre que haya una acción de tipo ADD_NOTEy debe devolver la textpropiedad en el entrante actioncomo el nuevo state.

La acción se distribuye en la parte inferior del código. Una vez que haya terminado, ejecute el código y observe la consola. Eso es todo lo que se necesita para enviar datos específicos de la acción a la tienda y usarlos cuando actualice la tienda state.*/
//Ejercicio
/*El creador de la acción addNoteTextdebe devolver un objeto con claves typey text.
El envío de una acción de tipo ADD_NOTEcon el addNoteTextcreador de la acción debería actualizar la statecadena pasada al creador de la acción. */

const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note,
  };
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());
