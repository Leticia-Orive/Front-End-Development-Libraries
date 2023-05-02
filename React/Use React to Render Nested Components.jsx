//Use React para renderizar componentes anidados
/* El último desafío mostró una forma sencilla de componer dos componentes, pero hay muchas formas diferentes de componer componentes con React.

La composición de componentes es una de las características poderosas de React. Cuando trabaja con React, es importante comenzar a pensar en su interfaz de usuario en términos de componentes como el ejemplo de la aplicación en el último desafío. Divide su interfaz de usuario en sus bloques de construcción básicos, y esas piezas se convierten en los componentes. Esto ayuda a separar el código responsable de la interfaz de usuario del código responsable de manejar la lógica de su aplicación. Puede simplificar enormemente el desarrollo y mantenimiento de proyectos complejos.

Hay dos componentes funcionales definidos en el editor de código, llamados TypesOfFruity Fruits. Tome el TypesOfFruitcomponente y compóngalo, o anídelo , dentro del Fruitscomponente. Luego tome el Fruitscomponente y anídelo dentro del TypesOfFood componente. ¡El resultado debe ser un componente secundario, anidado dentro de un componente principal, que está anidado dentro de un componente principal propio!*/
//Ejercicio
/* El TypesOfFood componente debe devolver un solo div elemento.
El TypesOfFood componente debe devolver el Fruits componente.
El Fruits componente debe devolver el TypesOfFruit componente.
El TypesOfFruit componente debe devolver los elementos h2 y ul.*/
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      {/* Change code below this line */}
      <TypesOfFruit />
      {/* Change code above this line */}
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        {/* Change code above this line */}
      </div>
    );
  }
}
