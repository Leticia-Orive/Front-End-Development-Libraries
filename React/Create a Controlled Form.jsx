//Crear un formulario controlado
/* El último desafío mostró que React puede controlar el estado interno de ciertos elementos como inputy textarea, lo que los convierte en componentes controlados. Esto también se aplica a otros elementos de formulario, incluido el formelemento HTML normal.

El MyFormcomponente se configura con un vacío formcon un controlador de envío. Se llamará al controlador de envío cuando se envíe el formulario.

Hemos agregado un botón que envía el formulario. Puede ver que tiene el typeconjunto para submitindicar que es el botón que controla el formulario. Agregue el inputelemento en formy configure sus valueatributos onChange()como el último desafío. A continuación, debe completar el handleSubmitmétodo para que establezca la propiedad de estado del componente submiten el valor de entrada actual en el archivo local state.

Nota: También debe llamar event.preventDefault()al controlador de envío para evitar el comportamiento de envío de formulario predeterminado que actualizará la página web. Para comodidad de los campistas, el comportamiento predeterminado se ha desactivado aquí para evitar que las actualizaciones restablezcan el código de desafío.

Finalmente, cree una h1 etiqueta después de la form cual represente el submit valor del componente state. Luego puede escribir el formulario y hacer clic en el botón (o presionar Intro), y debería ver su entrada en la página.*/
//Ejercicio
/*MyForm debe devolver un div elemento que contiene un formy una h1etiqueta. El formulario debe incluir un input y un button.
El estado de MyForm debe inicializarse con input y submit propiedades, ambos establecidos en cadenas vacías.
Escribir el input elemento debería actualizar la input propiedad del estado del componente.
El envío del formulario debería ejecutarse, handleSubmit lo que debería establecer la submitpropiedad en un estado igual al de la entrada actual.
handleSubmit debería llamar event.preventDefault
El h1 elemento de encabezado debe representar el valor del submitcampo desde el estado del componente.*/

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
