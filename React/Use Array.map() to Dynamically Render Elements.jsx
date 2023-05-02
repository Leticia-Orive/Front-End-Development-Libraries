//Use Array.map() para renderizar elementos dinámicamente
/* La representación condicional es útil, pero es posible que necesite sus componentes para representar una cantidad desconocida de elementos. A menudo, en la programación reactiva, un programador no tiene forma de saber cuál es el estado de una aplicación hasta el tiempo de ejecución, porque mucho depende de la interacción del usuario con ese programa. Los programadores necesitan escribir su código para manejar correctamente ese estado desconocido antes de tiempo. El uso Array.map()en React ilustra este concepto.

Por ejemplo, crea una aplicación simple de "Lista de tareas pendientes". Como programador, no tiene forma de saber cuántos elementos puede tener un usuario en su lista. Debe configurar su componente para representar dinámicamente la cantidad correcta de elementos de la lista mucho antes de que alguien que use el programa decida que hoy es el día de la lavandería.

El editor de código tiene la mayoría de los MyToDoListcomponentes configurados. Parte de este código debería resultarte familiar si completaste el desafío del formulario controlado. Notarás a textareay a button, junto con un par de métodos que rastrean sus estados, pero todavía no se muestra nada en la página.

Dentro de constructor, cree un this.stateobjeto y defina dos estados: userInputdebe inicializarse como una cadena vacía y toDoListdebe inicializarse como una matriz vacía. A continuación, elimine el nullvalor en el render()método junto a la itemsvariable. En su lugar, mapee sobre la toDoListmatriz almacenada en el estado interno del componente y represente dinámicamente un lipara cada elemento. Intente ingresar la cadena eat, code, sleep, repeaten el textarea, luego haga clic en el botón y vea qué sucede.

Nota: Es posible que sepa que todos los elementos secundarios hermanos creados por una operación de mapeo como esta deben proporcionarse con un keyatributo único. No te preocupes, este es el tema del próximo desafío.*/
//Ejercicios
/*El componente MyToDoList debe existir y mostrarse en la página.
El primer hijo de MyToDoList debe ser un text area elemento.
El segundo hijo de MyToDoList debe ser un br elemento.
El tercer hijo de MyToDoList debe ser un button elemento.
El estado de MyToDoList debe inicializarse toDoListcomo una matriz vacía.
El estado de MyToDoList debe inicializarse userInputcomo una cadena vacía.
Cuando Create Listse hace clic en el botón, el MyToDoListcomponente debe devolver dinámicamente una lista desordenada que contiene un elemento de lista para cada elemento de una lista separada por comas ingresada en el text area elemento. */
const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: "",
      toDoList: [],
    };

    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray,
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }
  render() {
    const items = this.state.toDoList.map((i) => <li>{i}</li>); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
