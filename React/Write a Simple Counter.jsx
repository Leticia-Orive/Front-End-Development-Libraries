//escribir un contador simple
/* Puede diseñar un componente con estado más complejo combinando los conceptos tratados hasta ahora. Estos incluyen la inicialización state, la escritura de métodos que establecen statey la asignación de controladores de clics para activar estos métodos.

El Countercomponente realiza un seguimiento de un countvalor en state. Hay dos botones que llaman a métodos increment()y decrement(). Escriba estos métodos para que el valor del contador aumente o disminuya en 1 cuando se haga clic en el botón correspondiente. Además, cree un reset()método para que cuando se haga clic en el botón de reinicio, el recuento se establezca en 0.

Nota: asegúrese de no modificar las classNames de los botones. Además, recuerde agregar los enlaces necesarios para los métodos recién creados en el constructor.*/
//Ejercicio
/* Counterdebe devolver un divelemento que contiene tres botones con contenido de texto en este orden Increment!, Decrement!, Reset.
El estado de Counterdebe inicializarse con una countpropiedad establecida en 0.
Hacer clic en el botón de incremento debería incrementar el conteo en 1.
Al hacer clic en el botón de decremento, el conteo debería disminuir en 1.
Al hacer clic en el botón de reinicio, el conteo debería reiniciarse a 0.*/
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  reset() {
    this.setState({
      count: 0,
    });
  }
  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}
