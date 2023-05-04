//Extraiga el estado local en Redux
/* ¡Ya casi terminas! Recuerde que escribió todo el código de Redux para que Redux pudiera controlar la gestión de estado de su aplicación de mensajes React. Ahora que Redux está conectado, debe extraer la administración de estado del Presentationalcomponente y colocarla en Redux. Actualmente, tiene Redux conectado, pero está manejando el estado localmente dentro del Presentationalcomponente.

En el Presentationalcomponente, primero, elimine la messagespropiedad en el archivo local state. Estos mensajes serán administrados por Redux. A continuación, modifique el submitMessage()método para que se distribuya submitNewMessage()desde this.propsy pase la entrada del mensaje actual desde local statecomo argumento. Debido a que lo eliminó messagesdel estado local, elimine la messagespropiedad de la llamada this.setState()aquí también. Finalmente, modifique el render()método para que mapee los mensajes recibidos de propsen lugar de state.

Una vez que se realicen estos cambios, la aplicación seguirá funcionando igual, excepto que Redux administra el estado. Este ejemplo también ilustra cómo un componente puede tener local state: su componente aún rastrea la entrada del usuario localmente por sí mismo state. Puede ver cómo Redux proporciona un marco de gestión de estado útil además de React. Obtuvo el mismo resultado usando solo el estado local de React al principio, y esto generalmente es posible con aplicaciones simples. Sin embargo, a medida que sus aplicaciones se vuelven más grandes y complejas, también lo hace la administración de su estado, y este es el problema que resuelve Redux.

*/
//ejercicio
/* El AppWrapper debería mostrarse en la página.
El Presentational componente debe mostrarse en la página.
El Presentational componente debe representar los elementos h2, input, buttony ul.
El Presentational componente debe recibir messagesde la tienda Redux como accesorio.
El Presentational componente debe recibir el submitMessage creador de la acción como accesorio.
El estado del Presentational componente debe contener una propiedad, inputque se inicializa en una cadena vacía.
Escribir el input elemento debería actualizar el estado del Presentationalcomponente.
El envío submitMessage del Presentationalcomponente debería actualizar la tienda Redux y borrar la entrada en el estado local.
El Presentational componente debe representar el messages de la tienda Redux.*/

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);

    // Remove property 'messages' from Presentational's local state
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    // Call 'submitNewMessage', which has been mapped to Presentational's props, with a new message;
    // meanwhile, remove the 'messages' property from the object returned by this.setState().
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: "",
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {/* The messages state is mapped to Presentational's props; therefore, when rendering,
               you should access the messages state through props, instead of Presentational's
               local state. */}
          {this.props.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}
// Change code above this line

const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
