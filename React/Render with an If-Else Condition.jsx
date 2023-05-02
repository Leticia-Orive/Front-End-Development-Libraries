//Renderizar con una condición If-Else
/* Otra aplicación del uso de JavaScript para controlar su vista renderizada es vincular los elementos que se renderizan a una condición. Cuando la condición es verdadera, se representa una vista. Cuando es falso, es una visión diferente. Puede hacer esto con una if/elsedeclaración estándar en el render()método de un componente React.

MyComponent contiene un booleanen su estado que rastrea si desea mostrar algún elemento en la interfaz de usuario o no. El buttoncambia el estado de este valor. Actualmente, muestra la misma interfaz de usuario cada vez. Vuelva a escribir el render()método con una if/elsedeclaración para que si displayes true, devuelva el marcado actual. De lo contrario, devuelva el marcado sin el h1elemento.

Nota: Debes escribir un if/elsepara pasar las pruebas. El uso del operador ternario no pasará aquí.*/
//Ejercicio
/* MyComponentdebe existir y renderizar.
Cuando display se establece en true, a div, buttony h1debería renderizarse.
Cuando display se establece en false, solo se debe representar un divy .button
El método render debe usar una if/else declaración para verificar la condición de this.state.display.*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}
