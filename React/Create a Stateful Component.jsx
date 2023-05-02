//Crear un componente con estado
/* Uno de los temas más importantes en React es state. El estado consta de cualquier dato que su aplicación necesita saber, que puede cambiar con el tiempo. Desea que sus aplicaciones respondan a los cambios de estado y presenten una interfaz de usuario actualizada cuando sea necesario. React ofrece una buena solución para la gestión de estado de las aplicaciones web modernas.

El estado se crea en un componente React declarando una statepropiedad en la clase del componente en su archivo constructor. Esto inicializa el componente statecuando se crea. La statepropiedad debe establecerse en JavaScript object. Declarándolo se ve así:

this.state = {

}
Tiene acceso al stateobjeto a lo largo de la vida de su componente. Puede actualizarlo, representarlo en su interfaz de usuario y pasarlo como accesorios a los componentes secundarios. El state objeto puede ser tan complejo o tan simple como lo necesite. Tenga en cuenta que debe crear un componente de clase extendiéndolo React.Componentpara poder crearlo statede esta manera.

Hay un componente en el editor de código que intenta representar una firstNamepropiedad desde su archivo state. Sin embargo, no hay statedefinido. Inicialice el componente con state en constructor y asigne su nombre a una propiedad de firstName.*/
//Ejercicio
/* StatefulComponent debe existir y renderizar.
StatefulComponent debe representar a div y un h1 elemento.
El estado de StatefulComponent debe inicializarse con una propiedad firstName establecida en una cadena.
La propiedad firstName en estado de StatefulComponentdebe rendirse en el h1 elemento.*/

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: "firstName",
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}
