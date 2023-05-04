//Use el proveedor para conectar Redux para reaccionar
/* En el último desafío, creó una tienda Redux para manejar la matriz de mensajes y creó una acción para agregar nuevos mensajes. El siguiente paso es proporcionar acceso a React a la tienda Redux y las acciones que necesita para enviar actualizaciones. React Redux proporciona su react-reduxpaquete para ayudar a realizar estas tareas.

React Redux proporciona una pequeña API con dos características clave: Providery connect. Otro desafío cubre connect. Es Providerun componente contenedor de React Redux que envuelve su aplicación React. Este contenedor le permite acceder a Redux storey dispatchfunciones en todo su árbol de componentes. Providertoma dos accesorios, la tienda Redux y los componentes secundarios de su aplicación. La definición Providerde un componente de la aplicación podría tener este aspecto:

<Provider store={store}>
  <App/>
</Provider>
El editor de código ahora muestra todo su código Redux y React de los últimos desafíos. Incluye la tienda Redux, las acciones y el DisplayMessagescomponente. La única pieza nueva es el AppWrappercomponente en la parte inferior. Use este componente de nivel superior para representar Providerfrom ReactReduxy pase la tienda Redux como accesorio. A continuación, renderice el DisplayMessagescomponente como un elemento secundario. Una vez que haya terminado, debería ver su componente React representado en la página.

Nota: React Redux está disponible aquí como una variable global, por lo que puede acceder al proveedor con notación de puntos. El código en el editor aprovecha esto y lo establece en una constante Providerpara que lo use en el AppWrappermétodo de renderizado.

*/
//Ejercicios
/* El AppWrapperdebería rendir.
El Providercomponente contenedor debe tener un accesorio de storepasado, igual a la tienda Redux.
DisplayMessages debe representar como hijo de AppWrapper.
El DisplayMessages componente debe representar un elemento h2, input, buttony ul.*/

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message,
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

class DisplayMessages extends React.Component {
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

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    );
  }

  // Change code above this line
}
