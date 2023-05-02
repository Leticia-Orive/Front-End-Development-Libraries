//Vincular 'esto' a un método de clase
/* Además de configurar y actualizar state, también puede definir métodos para su clase de componente. Un método de clase generalmente necesita usar la thispalabra clave para poder acceder a las propiedades de la clase (como statey props) dentro del alcance del método. Hay algunas formas de permitir que sus métodos de clase accedan a this.

Una forma común es vincular explícitamente thisel constructor para que thisse vincule a los métodos de clase cuando se inicializa el componente. Es posible que haya notado el último desafío utilizado this.handleClick = this.handleClick.bind(this)para su handleClickmétodo en el constructor. Luego, cuando llama a una función como this.setState()dentro de su método de clase, thisse refiere a la clase y no será undefined.

Nota: La thispalabra clave es uno de los aspectos más confusos de JavaScript, pero juega un papel importante en React. Aunque su comportamiento aquí es totalmente normal, estas lecciones no son el lugar para una revisión en profundidad, thisasí que consulte otras lecciones si lo anterior es confuso.

El editor de código tiene un componente stateque realiza un seguimiento del texto. También tiene un método que le permite establecer el texto en You clicked!. Sin embargo, el método no funciona porque está usando la thispalabra clave que no está definida. Corríjalo vinculando explícitamente thisel handleClick()método en el constructor del componente.

A continuación, agregue un controlador de clic al buttonelemento en el método de representación. Debería activar el handleClick()método cuando el botón recibe un evento de clic. Recuerde que el método que pasa al onClick controlador necesita llaves porque debe interpretarse directamente como JavaScript.

Una vez que complete los pasos anteriores, debería poder hacer clic en el botón y ver You clicked!.*/
//Ejercicio
/* MyComponent debe devolver un div elemento que envuelve dos elementos, un botón y un h1 elemento, en ese orden.
El estado de MyComponent debe inicializarse con el par de valores clave { text: "Hello" }.
Al hacer clic en el button elemento, se debe ejecutar el handleClick método y establecer el estado text en You clicked!.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!",
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <button onClick={this.handleClick}>Click Me</button>
        {/* Change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
