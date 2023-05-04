//Conecte Redux a la aplicación de mensajes
/* Ahora que comprende cómo usar connectpara conectar React a Redux, puede aplicar lo que ha aprendido a su componente React que maneja los mensajes.

En la última lección, el componente que conectó a Redux se llamó Presentational, y esto no fue arbitrario. Este término generalmente se refiere a los componentes de React que no están directamente conectados a Redux. Simplemente son responsables de la presentación de la interfaz de usuario y lo hacen en función de los accesorios que reciben. Por el contrario, los componentes del contenedor están conectados a Redux. Por lo general, estos son responsables de enviar acciones a la tienda y, a menudo, pasan el estado de la tienda a los componentes secundarios como accesorios.

El editor de código tiene todo el código que ha escrito en esta sección hasta ahora. El único cambio es que el componente React cambia de nombre a Presentational. Cree un nuevo componente contenido en una constante llamada Containerque se usa connectpara conectar el Presentationalcomponente a Redux. Luego, en el AppWrapper, renderice el Providercomponente React Redux. Pase Providerel Redux storecomo accesorio y renderice Containercomo un niño. Una vez que todo esté configurado, volverá a ver la aplicación de mensajes en la página.*/
//ejercicio
/* El AppWrapperdebería mostrarse en la página.
El Presentational componente debe mostrarse en la página.
El Presentational componente debe representar los elementos h2, input, buttony ul.
El Presentational componente debe recibir messages de la tienda Redux como accesorio.
El Presentational componente debe recibir el submitMessage creador de la acción como accesorio.*/

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
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
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
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: "",
        messages: state.messages.concat(currentMessage),
      };
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
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage));
    },
  };
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
