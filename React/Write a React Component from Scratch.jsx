//Escribir un componente React desde cero
/* Ahora que ha aprendido los conceptos básicos de los componentes JSX y React, es hora de escribir un componente por su cuenta. Los componentes de React son los componentes básicos de las aplicaciones de React, por lo que es importante familiarizarse con su escritura. Recuerde, un componente típico de React es un ES6 classque se extiende React.Component. Tiene un método de renderizado que devuelve HTML (desde JSX) o null. Esta es la forma básica de un componente React. Una vez que comprenda bien esto, estará preparado para comenzar a construir proyectos React más complejos.

Defina una clase MyComponentque se extienda React.Component. Su método de renderizado debería devolver un divque contenga una h1etiqueta con el texto: My First React Component!en él. Use este texto exactamente, el caso y la puntuación importan. Asegúrese de llamar también al constructor de su componente.

Renderice este componente al DOM usando ReactDOM.render(). Hay un divcon id='challenge-node'disponible para su uso.*/
//Ejercicio
/* Debería haber un componente React llamado MyComponent.
MyComponent debe contener una h1etiqueta con texto My First React Component!Caso y puntuación.
MyComponent debe rendirse al DOM.
MyComponent debe tener un constructor llamando supercon props.*/

// change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="challenge-node">
        <h1>My First React Component!</h1>
      </div>
    );
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
