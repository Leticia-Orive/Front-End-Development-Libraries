//Renderizar condicionalmente desde Props
/* Hasta ahora, ha visto cómo usar if/else, &&y el operador ternario ( condition ? expressionIfTrue : expressionIfFalse) para tomar decisiones condicionales sobre qué renderizar y cuándo. Sin embargo, queda un tema importante para discutir que le permite combinar cualquiera o todos estos conceptos con otra característica poderosa de React: accesorios. El uso de accesorios para renderizar código de forma condicional es muy común entre los desarrolladores de React, es decir, usan el valor de un accesorio dado para tomar decisiones automáticamente sobre qué renderizar.

En este desafío, configurará un componente secundario para tomar decisiones de representación en función de los accesorios. También utilizará el operador ternario, pero puede ver cómo varios de los otros conceptos que se cubrieron en los últimos desafíos pueden ser igualmente útiles en este contexto.

El editor de código tiene dos componentes que están parcialmente definidos para usted: un padre llamado GameOfChancey un hijo llamado Results. Se utilizan para crear un juego simple donde el usuario presiona un botón para ver si gana o pierde.

Primero, necesitará una expresión simple que devuelva aleatoriamente un valor diferente cada vez que se ejecute. Puedes Math.random()usar Este método devuelve un valor entre 0(inclusivo) y 1(exclusivo) cada vez que se llama. Entonces, para probabilidades de 50/50, utilícelo Math.random() >= .5en su expresión. Estadísticamente hablando, esta expresión devolverá trueel 50% de las veces y falseel otro 50%. En el método de representación, reemplace nullcon la expresión anterior para completar la declaración de la variable.

Ahora tiene una expresión que puede usar para tomar una decisión aleatoria en el código. A continuación, debe implementar esto. Renderice el Resultscomponente como un elemento secundario de GameOfChance, y páselo expressioncomo un accesorio llamado fiftyFifty. En el Resultscomponente, escriba una expresión ternaria para representar el h1elemento con el texto You Win!o You Lose!en función de la fiftyFiftypropiedad que se pasa desde GameOfChance. Finalmente, asegúrese de que el handleClick()método cuente correctamente cada turno para que el usuario sepa cuántas veces ha jugado. Esto también sirve para que el usuario sepa que el componente se ha actualizado en caso de que gane o pierda dos veces seguidas.*/
//Ejercicio
/* El GameOfChance componente debe existir y mostrarse en la página.
GameOfChance debe devolver un solo buttonelemento.
GameOfChance debe devolver una sola instancia del Resultscomponente, que tiene un accesorio llamado fiftyFifty.
GameOfChance state debe inicializarse con una propiedad de counterestablecida en un valor de 1.
Cuando el GameOfChance componente se representa por primera vez en el DOM, pse debe devolver un elemento con el texto interno de Turn: 1.
Cada vez que se hace clic en el botón, el estado del contador debe incrementarse en un valor de 1, y un solo pelemento debe representarse en el DOM que contiene el texto Turn: N, donde Nes el valor del estado del contador.
Cuando el GameOfChancecomponente se monta por primera vez en el DOM y cada vez que se hace clic en el botón a partir de entonces, h1se debe devolver un solo elemento que representa aleatoriamente You Win!o You Lose!. Nota: esto puede fallar aleatoriamente. Si eso sucede, inténtalo de nuevo.*/

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1, // change code here
    });
  }
  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* change code below this line */}
        <Results fiftyFifty={expression} />
        {/* change code above this line */}
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
