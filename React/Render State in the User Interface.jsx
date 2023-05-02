//Representar estado en la interfaz de usuario
/* Una vez que define el estado inicial de un componente, puede mostrar cualquier parte del mismo en la interfaz de usuario que se representa. Si un componente tiene estado, siempre tendrá acceso a los datos en statesu render()método. Puede acceder a los datos con this.state.

Si desea acceder a un valor de estado dentro del returnmétodo de representación, debe encerrar el valor entre llaves.

statees una de las características más poderosas de los componentes en React. Le permite rastrear datos importantes en su aplicación y generar una interfaz de usuario en respuesta a los cambios en estos datos. Si sus datos cambian, su interfaz de usuario cambiará. React usa lo que se llama un DOM virtual para realizar un seguimiento de los cambios entre bastidores. Cuando se actualizan los datos de estado, se activa una nueva representación de los componentes que utilizan esos datos, incluidos los componentes secundarios que recibieron los datos como accesorio. React actualiza el DOM real, pero solo cuando es necesario. Esto significa que no tiene que preocuparse por cambiar el DOM. Simplemente declara cómo debería verse la interfaz de usuario.

Tenga en cuenta que si hace que un componente tenga estado, ningún otro componente es consciente de su state. Está statecompletamente encapsulado o es local para ese componente, a menos que pase datos de estado a un componente secundario como props. Esta noción de encapsulado statees muy importante porque le permite escribir cierta lógica y luego tener esa lógica contenida y aislada en un lugar de su código.

En el editor de código, MyComponentya tiene estado. Defina una h1etiqueta en el método de representación del componente que represente el valor namedel estado del componente.

Nota: El h1solo debe mostrar el valor de statey nada más. En JSX, cualquier código que escriba con llaves { }se tratará como JavaScript. Entonces, para acceder al valor desde, statesimplemente encierre la referencia entre llaves.*/
//Ejercicio
/* MyComponent debe tener una clave namecon valor freeCodeCamp almacenado en su estado.
MyComponent debe representar un h1elemento de encabezado encerrado en un solo div.
El h1 elemento de encabezado renderizado solo debe contener texto renderizado desde el estado del componente.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp",
    };
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>{this.state.name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
