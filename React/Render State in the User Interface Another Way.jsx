//Representar el estado en la interfaz de usuario de otra manera
/* Hay otra forma de acceder statea un componente. En el render()método, antes de la returndeclaración, puede escribir JavaScript directamente. Por ejemplo, podría declarar funciones, acceder a datos desde stateo props, realizar cálculos sobre estos datos, etc. Luego, puede asignar cualquier dato a las variables, a las que tiene acceso en la returndeclaración.

En el MyComponentmétodo de renderizado, defina un constllamado namey configúrelo igual al valor del nombre en el archivo state. Debido a que puede escribir JavaScript directamente en esta parte del código, no tiene que encerrar esta referencia entre llaves.

Luego, en la declaración de devolución, represente este valor en una h1 etiqueta usando la variable name. Recuerde, debe usar la sintaxis JSX (llaves para JavaScript) en la declaración de devolución.*/
//Ejercicio
/* MyComponent debe tener una clave namecon valor freeCodeCamp almacenado en su estado.
MyComponent debe representar un h1 elemento de encabezado encerrado en un solo div.
La etiqueta representada h1debe incluir una referencia a {name}.
El h1 elemento de encabezado renderizado debe contener texto renderizado a partir del estado del componente.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        {/* Change code below this line */}
        <h1>{name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
