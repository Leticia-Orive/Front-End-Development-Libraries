//Establecer estado con this.setState
/* Los desafíos anteriores cubrieron el componente statey cómo inicializar el estado en el archivo constructor. También hay una forma de cambiar el archivo state. React proporciona un método para actualizar el componente statellamado setState. Llamas al setStatemétodo dentro de tu clase de componente así: this.setState(), pasando un objeto con pares clave-valor. Las claves son sus propiedades de estado y los valores son los datos de estado actualizados. Por ejemplo, si estuviéramos almacenando un usernameestado y quisiéramos actualizarlo, se vería así:

this.setState({
  username: 'Lewis'
});
React espera que nunca modifiques statedirectamente, sino que siempre lo uses this.setState()cuando se produzcan cambios de estado. Además, debe tener en cuenta que React puede procesar por lotes varias actualizaciones de estado para mejorar el rendimiento. Lo que esto significa es que las actualizaciones de estado a través del setStatemétodo pueden ser asíncronas. Hay una sintaxis alternativa para el setStatemétodo que proporciona una forma de evitar este problema. Esto rara vez es necesario, ¡pero es bueno tenerlo en cuenta! Consulte nuestro artículo de React para obtener más detalles.

Hay un buttonelemento en el editor de código que tiene un onClick()controlador. Este controlador se activa cuando buttonrecibe un evento de clic en el navegador y ejecuta el handleClickmétodo definido en MyComponent. Dentro del handleClickmétodo, actualice el componente stateusando this.setState(). Establezca la namepropiedad para stateque sea igual a la cadena React Rocks!.

Haga clic en el botón y observe la actualización del estado renderizado. No se preocupe si no comprende completamente cómo funciona el código del controlador de clics en este momento. Está cubierto en los próximos desafíos.

*/
//Ejercicio
/* El estado de MyComponent debe inicializarse con el par de valores clave { name: Initial State }.
MyComponent debe representar un h1 elemento de encabezado.
El h1 elemento de encabezado renderizado debe contener texto renderizado a partir del estado del componente.
Llamar al handleClick método MyComponent debe establecer la propiedad de nombre en el estado en igual React Rocks!.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: "React Rocks!",
      // Change code above this line
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
