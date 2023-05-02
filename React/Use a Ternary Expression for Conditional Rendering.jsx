//Utilice una expresión ternaria para la representación condicional
/* Antes de pasar a las técnicas de representación dinámica, existe una última forma de utilizar las condicionales de JavaScript integradas para representar lo que desea: el operador ternario . El operador ternario se utiliza a menudo como un atajo para if/elsedeclaraciones en JavaScript. No son tan sólidas como if/elselas declaraciones tradicionales, pero son muy populares entre los desarrolladores de React. Una de las razones de esto es la forma en que se compila JSX, if/elselas declaraciones no se pueden insertar directamente en el código JSX. Es posible que haya notado esto hace un par de desafíos: cuando if/elsese requería una declaración, siempre estaba fuera delreturndeclaración. Las expresiones ternarias pueden ser una excelente alternativa si desea implementar la lógica condicional dentro de su JSX. Recuerde que un operador ternario tiene tres partes, pero puede combinar varias expresiones ternarias juntas. Aquí está la sintaxis básica:

condition ? expressionIfTrue : expressionIfFalse;
El editor de código tiene tres constantes definidas dentro del método CheckUserAgedel componente render(). Se llaman buttonOne, buttonTwo y buttonThree. A cada uno de estos se le asigna una expresión JSX simple que representa un elemento de botón. Primero, inicialice el estado de CheckUserAgewith inputy userAgeambos establezcan los valores de una cadena vacía.

Una vez que el componente presenta información en la página, los usuarios deben tener una forma de interactuar con él. Dentro de la declaración del componente return, configure una expresión ternaria que implemente la siguiente lógica: cuando la página se cargue por primera vez, represente el botón de envío, , buttonOneen la página. Luego, cuando un usuario ingresa su edad y hace clic en el botón, muestra un botón diferente según la edad. Si un usuario ingresa un número menor que 18, render button Three. Si un usuario ingresa un número mayor o igual a 18, render buttonTwo.*/
//Ejercicio
/* El CheckUserAge componente debe renderizarse con un solo inputelemento y un solo buttonelemento.
El CheckUserAge estado del componente debe inicializarse con una propiedad de userAgey una propiedad de input, ambas establecidas en un valor de una cadena vacía.
Cuando el CheckUserAge componente se representa por primera vez en el DOM, el buttontexto interno debe ser Enviar.
Cuando se ingresa un número menor a 18 en el inputelemento y se buttonhace clic en , el buttontexto interno del debe leer You Shall Not Pass.
Cuando se ingresa un número mayor o igual a 18 en el inputelemento y se buttonhace clic en , el buttontexto interno del debe leer You May Enter.
Una vez que se ha enviado un número, y el valor de se input cambia una vez más, button debería volver a leer Submit.
Su código no debe contener if/else declaraciones.*/

const inputStyle = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: "",
      input: "",
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "",
    });
  }
  submit() {
    this.setState((state) => ({
      userAge: state.input,
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ""
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
