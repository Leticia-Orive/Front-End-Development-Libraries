//Pasar una devolución de llamada como accesorios
/* Puede pasar statecomo accesorios a componentes secundarios, pero no está limitado a pasar datos. También puede pasar funciones de controlador o cualquier método que esté definido en un componente de React a un componente secundario. Así es como permite que los componentes secundarios interactúen con sus componentes principales. Pasas métodos a un niño como un accesorio normal. Se le asigna un nombre y tiene acceso a ese nombre de método this.propsen el componente secundario.

Hay tres componentes descritos en el editor de código. El MyAppcomponente es el elemento principal que representará los componentes GetInputsecundarios RenderInput. Agregue el GetInputcomponente al método de renderizado en MyApp, luego pásele un accesorio llamado inputasignado a inputValuefrom MyApp's state. También cree un accesorio llamado handleChange y pásele el controlador de entrada handleChange.

A continuación, agregue RenderInputal método render en MyApp, luego cree un accesorio llamado inputy pásele el inputValuefrom state. Una vez que haya terminado, podrá escribir en el inputcampo del GetInputcomponente, que luego llama al método del controlador en su padre a través de accesorios. Esto actualiza la entrada en stateel padre, que se pasa como accesorios a ambos hijos. Observe cómo fluyen los datos entre los componentes y cómo la única fuente de verdad sigue siendo la stated el componente principal. Es cierto que este ejemplo es un poco artificial, pero debería servir para ilustrar cómo se pueden pasar los datos y las devoluciones de llamada entre los componentes de React.*/
//Ejercicio
/* El MyApp componente debe renderizarse.
El GetInput componente debe renderizarse.
El RenderInput componente debe renderizarse.
El GetInput componente debe recibir la MyApp propiedad de estado inputValue como accesorios y contener un input elemento que modifique MyApp el estado.
El RenderInput componente debe recibir la MyApp propiedad estatal inputValue como apoyos.*/

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}
