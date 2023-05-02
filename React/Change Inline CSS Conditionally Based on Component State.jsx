//Cambiar CSS en línea condicionalmente según el estado del componente
/* En este punto, ha visto varias aplicaciones de representación condicional y el uso de estilos en línea. Aquí hay un ejemplo más que combina ambos temas. También puede representar CSS condicionalmente en función del estado de un componente de React. Para hacer esto, verifica una condición y, si se cumple esa condición, modifica el objeto de estilos que está asignado a los elementos JSX en el método de representación.

Es importante entender este paradigma porque es un cambio dramático del enfoque más tradicional de aplicar estilos modificando elementos DOM directamente (lo cual es muy común con jQuery, por ejemplo). En ese enfoque, debe realizar un seguimiento de cuándo cambian los elementos y también manejar la manipulación real directamente. Puede ser difícil hacer un seguimiento de los cambios, lo que puede hacer que su interfaz de usuario sea impredecible. Cuando establece un objeto de estilo en función de una condición, describe cómo debe verse la interfaz de usuario en función del estado de la aplicación. Hay un flujo claro de información que solo se mueve en una dirección. Este es el método preferido al escribir aplicaciones con React.

El editor de código tiene un componente de entrada controlado simple con un borde con estilo. Desea diseñar este borde rojo si el usuario escribe más de 15 caracteres de texto en el cuadro de entrada. Agregue una condición para verificar esto y, si la condición es válida, establezca el estilo de borde de entrada en 3px solid red. Puede probarlo ingresando texto en la entrada.*/
//Ejercicio
/* El GateKeeper componente debe representar un divelemento.
El GateKeeper componente debe inicializarse con una clave de estado inputestablecida en una cadena vacía.
El GateKeeper componente debe representar una h3etiqueta y una inputetiqueta.
Inicialmente , la input etiqueta debe tener un estilo de 1px solid black para la border propiedad.
La input etiqueta debe tener un estilo con un borde de 3px solid redsi el valor de entrada en el estado tiene más de 15 caracteres.*/

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    let inputStyle = {
      border: "1px solid black",
    };
    // Change code below this line
    if (this.state.input.length > 15) {
      inputStyle.border = "3px solid red";
    }

    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
