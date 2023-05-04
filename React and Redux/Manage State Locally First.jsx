//Administre el estado localmente primero
/* Aquí terminará de crear el DisplayMessagescomponente.

Primero, en el render()método, haga que el componente represente un inputelemento, buttonelemento y ulelemento. Cuando el inputelemento cambia, debe desencadenar un handleChange()método. Además, el inputelemento debe representar el valor de inputque está en el estado del componente. El buttonelemento debe activar un submitMessage()método cuando se hace clic en él.

En segundo lugar, escriba estos dos métodos. El handleChange()método debe actualizar inputcon lo que el usuario está escribiendo. El submitMessage()método debe concatenar el mensaje actual (almacenado en input) a la messagesmatriz en el estado local y borrar el valor de input.

Finalmente, use el ulpara mapear sobre la matriz messagesy representarlo en la pantalla como una lista de li elementos.*/
//Ejercicio
/* El DisplayMessagescomponente debe inicializarse con un estado igual a { input: "", messages: [] }.
El DisplayMessagescomponente debe representar un elemento divque contenga un h2elemento, un buttonelemento, un ul elemento y li elementos como elementos secundarios.
.mapdebe usarse en la messagesmatriz.
El inputelemento debe representar el valor de inputen el estado local.
Llamar al método handleChangedebería actualizar el inputvalor en estado a la entrada actual.
Al hacer clic en el Add messagebotón, se debe llamar al método submitMessageque debe agregar la corriente inputa la messagesmatriz en estado.
El submitMessagemétodo debe borrar la entrada actual.*/

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages,
    });
  }

  submitMessage() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.input}
        />
        <button onClick={this.submitMessage.bind(this)}>Submit </button>
        <ul>
          {this.state.messages.map((x, i) => {
            return <li key={i}>{x}</li>;
          })}
        </ul>

        {/* Change code above this line */}
      </div>
    );
  }
}
