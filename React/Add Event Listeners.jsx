//Agregar oyentes de eventos
/* El componentDidMount()método también es el mejor lugar para adjuntar cualquier detector de eventos que necesite agregar para una funcionalidad específica. React proporciona un sistema de eventos sintético que envuelve el sistema de eventos nativo presente en los navegadores. Esto significa que el sistema de eventos sintéticos se comporta exactamente igual independientemente del navegador del usuario, incluso si los eventos nativos pueden comportarse de manera diferente entre diferentes navegadores.

Ya ha estado usando algunos de estos controladores de eventos sintéticos, como onClick(). El sistema de eventos sintéticos de React es ideal para la mayoría de las interacciones que administrará en elementos DOM. Sin embargo, si desea adjuntar un controlador de eventos al documento o a los objetos de la ventana, debe hacerlo directamente.

Adjunte un detector de eventos en el componentDidMount()método para keydowneventos y haga que estos eventos activen la devolución de llamada handleKeyPress(). Puede usar document.addEventListener() which toma el evento (entre comillas) como primer argumento y la devolución de llamada como segundo argumento.

Luego, en componentWillUnmount(), elimine este mismo detector de eventos. Puede pasar los mismos argumentos a document.removeEventListener(). Es una buena práctica usar este método de ciclo de vida para limpiar los componentes de React antes de que se desmonten y destruyan. La eliminación de detectores de eventos es un ejemplo de una de esas acciones de limpieza.*/
//Ejercicio
/* MyComponent debe representar un div elemento que envuelve una h1 etiqueta.
Se debe adjuntar un keydown oyente al documento en formato componentDidMount.
El keydown oyente debe eliminarse del documento en formato componentWillUnmount.
Una vez que el componente se ha montado, al presionar debería actualizar su estado y la etiqueta enterrenderizada .h1*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + "You pressed the enter key! ",
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
