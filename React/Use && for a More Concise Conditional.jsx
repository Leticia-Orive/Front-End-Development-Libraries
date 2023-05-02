//Use && para un condicional más conciso
/* Las if/elsedeclaraciones funcionaron en el último desafío, pero hay una forma más concisa de lograr el mismo resultado. Imagine que está rastreando varias condiciones en un componente y desea que se representen diferentes elementos dependiendo de cada una de estas condiciones. Si escribe muchas else ifdeclaraciones para devolver interfaces de usuario ligeramente diferentes, puede repetir el código, lo que deja margen para el error. En su lugar, puede usar el &&operador lógico para realizar la lógica condicional de una manera más concisa. Esto es posible porque desea verificar si una condición es true, y si lo es, devolver algo de marcado. Aquí hay un ejemplo:

{condition && <p>markup</p>}
Si conditiones true, se devolverá el marcado. Si la condición es false, la operación regresará inmediatamente falsedespués de evaluar conditiony no devolverá nada. Puede incluir estas declaraciones directamente en su JSX y unir varias condiciones escribiendo &&después de cada una. Esto le permite manejar una lógica condicional más compleja en su render()método sin repetir mucho código.

Resuelva el ejemplo anterior nuevamente, de modo que h1solo se represente si displayes true, pero use el &&operador lógico en lugar de una if/else declaración.*/
//Ejercicio
/* MyComponent debe existir y renderizar.
Cuando display se establece en true, a div, buttony h1debería renderizarse.
Cuando display se establece en false, solo se debe representar un divy .button
El método de renderizado debe usar el &&operador lógico para verificar la condición de this.state.display.*/

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
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}
