//Crear una entrada controlada
/* Su aplicación puede tener interacciones más complejas entre statey la interfaz de usuario renderizada. Por ejemplo, los elementos de control de formulario para la entrada de texto, como inputy textarea, mantienen su propio estado en el DOM a medida que el usuario escribe. Con React, puede mover este estado mutable al state. La entrada del usuario se convierte en parte de la aplicación state, por lo que React controla el valor de ese campo de entrada. Por lo general, si tiene componentes de React con campos de entrada en los que el usuario puede escribir, será un formulario de entrada controlado.

El editor de código tiene el esqueleto de un componente llamado ControlledInputpara crear un inputelemento controlado. El componente state ya está inicializado con una input propiedad que contiene una cadena vacía. Este valor representa el texto que un usuario escribe en el input campo.

Primero, cree un método llamado handleChange() que tenga un parámetro llamado event. Cuando se llama al método, recibe un event objeto que contiene una cadena de texto del input elemento. Puede acceder a esta cadena event.target.value dentro del método. Actualice la input propiedad del componente state con esta nueva cadena.

En el render método, cree el inputelemento encima de la h4 etiqueta. Agregue un value atributo que sea igual a la input propiedad del componente state. A continuación, agregue un onChange() conjunto de controladores de eventos al handleChange() método.

Cuando escribe en el cuadro de entrada, el método procesa ese texto handleChange(), lo establece como la input propiedad en el local state y lo representa como el valor en el input cuadro de la página. El componente state es la única fuente de verdad con respecto a los datos de entrada.

Por último, pero no menos importante, no olvide agregar los enlaces necesarios en el constructor.*/
//Ejercicio
/* Controlled Input debe devolver un div elemento que contiene una input y una petiqueta.
El estado de Controlled Input debe inicializarse con una input propiedad establecida en una cadena vacía.
Escribir el elemento de entrada debería actualizar el estado y el valor de la entrada, y el pelemento debería representar este estado a medida que escribe.*/

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange} />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
