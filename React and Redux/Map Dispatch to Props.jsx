//Envío de mapas a accesorios
/* La mapDispatchToProps()función se usa para proporcionar creadores de acciones específicas a sus componentes React para que puedan enviar acciones contra la tienda Redux. Es similar en estructura a la mapStateToProps()función que escribiste en el último desafío. Devuelve un objeto que asigna acciones de envío a nombres de propiedades, que se convierten en componentes props. Sin embargo, en lugar de devolver una parte de state, cada propiedad devuelve una función que llama dispatchcon un creador de acción y cualquier dato de acción relevante. Tiene acceso a esto dispatchporque se pasa a mapDispatchToProps()como un parámetro cuando define la función, tal como lo pasó statea mapStateToProps(). Detrás de escena, React Redux está usando Redux store.dispatch()para realizar estos despachos con mapDispatchToProps(). Esto es similar a cómo se usastore.subscribe()para los componentes que están asignados a state.

Por ejemplo, tiene un loginUser()creador de acciones que toma usernamecomo carga útil una acción. El objeto devuelto mapDispatchToProps()por este creador de acciones se vería así:

{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
El editor de código proporciona un creador de acciones llamado addMessage(). Escriba la función mapDispatchToProps()que toma dispatchcomo argumento y luego devuelve un objeto. El objeto debe tener una propiedad submitNewMessageestablecida en la función de envío, que toma un parámetro para que el nuevo mensaje se agregue cuando se envía addMessage().*/
//Ejercicio
/*addMessage debe devolver un objeto con claves typey message.
mapDispatchToProps debe ser una función.
mapDispatchToProps debe devolver un objeto.
Despachar addMessagec on submitNewMessage desde mapDispatchToPropsdebe devolver un mensaje a la función de despacho. */

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};
