//Pasar una matriz como accesorios
/* El último desafío demostró cómo pasar información de un componente principal a un componente secundario como propspropiedades o. Este desafío analiza cómo las matrices se pueden pasar como archivos props. Para pasar una matriz a un elemento JSX, debe tratarse como JavaScript y estar entre llaves.

<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
El componente hijo entonces tiene acceso a la propiedad de la matriz colors. Se pueden utilizar métodos de matriz como los que join()se pueden utilizar al acceder a la propiedad. const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>Esto unirá todos colorslos elementos de la matriz en una cadena separada por comas y producirá: <p>green, blue, red</p>Más adelante, aprenderemos sobre otros métodos comunes para generar matrices de datos en React.

Hay Listy ToDocomponentes en el editor de código. Al renderizar cada uno Listdesde el ToDocomponente, pase una taskspropiedad asignada a una matriz de tareas pendientes, por ejemplo ["walk dog", "workout"]. Luego acceda a esta tasksmatriz en el Listcomponente, mostrando su valor dentro del pelemento. Úselo join(", ")para mostrar la props.tasksmatriz en el pelemento como una lista separada por comas. La lista de hoy debe tener al menos 2 tareas y la de mañana debe tener al menos 3 tareas.

*/
//Ejercicio
/* El ToDocomponente debe devolver un solo exterior div.
El tercer hijo del ToDocomponente debe ser una instancia del Listcomponente.
El quinto hijo del ToDocomponente debe ser una instancia del Listcomponente.
Ambas instancias del Listcomponente deben tener una propiedad llamada tasksy tasksdeben ser de tipo matriz.
El primer Listcomponente que representa las tareas de hoy debe tener 2 o más elementos.
El segundo Listcomponente que representa las tareas para mañana debe tener 3 o más elementos.
El Listcomponente debe representar el valor de la taskspropiedad en la p etiqueta.*/

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Run"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Drink", "Eat"]} />
      </div>
    );
  }
}
