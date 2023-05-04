//Conecta Redux para Reaccionar
/* Ahora que ha escrito las funciones mapStateToProps()y mapDispatchToProps(), puede usarlas para mapear statey dispatchpara propsuno de sus componentes de React. El connectmétodo de React Redux puede manejar esta tarea. Este método toma dos argumentos opcionales mapStateToProps()y mapDispatchToProps(). Son opcionales porque puede tener un componente al que solo necesita acceso statepero no necesita enviar ninguna acción, o viceversa.

Para usar este método, pase las funciones como argumentos e inmediatamente llame al resultado con su componente. Esta sintaxis es un poco inusual y parece:

connect(mapStateToProps, mapDispatchToProps)(MyComponent)
Nota: si desea omitir uno de los argumentos del connectmétodo, pase nullen su lugar.

El editor de código tiene las funciones mapStateToProps() y mapDispatchToProps() y un nuevo componente React llamado Presentational. Conecte este componente a Redux con el connectmétodo del ReactReduxobjeto global y llámelo inmediatamente en el Presentationalcomponente. Asigne el resultado a una nueva const llamada ConnectedComponent que represente el componente conectado. Eso es todo, ¡ahora estás conectado a Redux! Intente cambiar cualquiera de connectlos argumentos a nully observe los resultados de la prueba.*/
//Ejercicios
/* El Presentational componente debe renderizarse.
El Presentational componente debe recibir una prop messagesa través de connect.
El Presentational componente debe recibir una prop submitNewMessage a través de connect.*/

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);
