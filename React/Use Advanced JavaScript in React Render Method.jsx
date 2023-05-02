//Use JavaScript avanzado en el método React Render
/* En desafíos anteriores, aprendió a inyectar código JavaScript en el código JSX usando llaves, { }para tareas como acceder a accesorios, pasar accesorios, acceder al estado, insertar comentarios en su código y, más recientemente, diseñar sus componentes. Todos estos son casos de uso comunes para poner JavaScript en JSX, pero no son la única forma en que puede utilizar código JavaScript en sus componentes de React.

También puede escribir JavaScript directamente en sus rendermétodos, antes de la returninstrucción, sin insertarlo entre llaves. Esto se debe a que aún no está dentro del código JSX. Cuando desee utilizar una variable más adelante en el código JSX dentro de la returndeclaración, coloque el nombre de la variable entre llaves.

En el código proporcionado, el rendermétodo tiene una matriz que contiene 20 frases para representar las respuestas que se encuentran en el clásico juguete Magic Eight Ball de 1980. El evento de clic del botón está vinculado al askmétodo, por lo que cada vez que se hace clic en el botón, se generará un número aleatorio y se almacenará como el randomIndexestado. En la línea 52, elimine la cadena change me!y reasigne la answerconst para que su código acceda aleatoriamente a un índice diferente de la possibleAnswersmatriz cada vez que se actualice el componente. Finalmente, inserte la answerconst dentro de las petiquetas.*/
//Ejercicio
/* El MagicEightBallcomponente debe existir y debe mostrarse en la página.
MagicEightBall  El primer hijo debe ser un input elemento.
MagicEightBall El tercer hijo de debe ser un button elemento.
MagicEightBall El estado de debe inicializarse con una propiedad de userInputy una propiedad de randomIndexambos establecidos en un valor de una cadena vacía.
Cuando MagicEightBall se monta por primera vez en el DOM, debe devolver un p elemento vacío.
Cuando se ingresa texto en el input elemento y se hace clic en el botón, el MagicEightBall componente debe devolver un p elemento que contiene un elemento aleatorio de la possible Answers matriz.*/

const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];// Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}
          {answer}
          {/* Change code above this line */}
        </p>
      </div>
    );
    
  }
}
