//Usar el método de ciclo de vida componenteDidMount
/* La mayoría de los desarrolladores web, en algún momento, necesitan llamar a un punto final de API para recuperar datos. Si está trabajando con React, es importante saber dónde realizar esta acción.

La mejor práctica con React es realizar llamadas API o cualquier llamada a su servidor en el método de ciclo de vida componentDidMount(). Este método se llama después de montar un componente en el DOM. Cualquier llamada setState()aquí activará una nueva representación de su componente. Cuando llama a una API en este método y establece su estado con los datos que devuelve la API, activará automáticamente una actualización una vez que reciba los datos.

Hay una llamada de API simulada en componentDidMount(). Establece el estado después de 2,5 segundos para simular una llamada a un servidor para recuperar datos. Este ejemplo solicita el total actual de usuarios activos para un sitio. En el método de representación, represente el valor de después activeUsersdel h1texto Active Users:. Mire lo que sucede en la vista previa y siéntase libre de cambiar el tiempo de espera para ver los diferentes efectos.*/
//Ejercicio
/*MyComponent debe representar un divelemento que envuelve una h1etiqueta.
El estado del componente debe actualizarse con una función de tiempo de espera en componentDidMount.
La h1 etiqueta debe representar el active Usersvalor del MyComponent estado de . */

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users:{this.state.activeUsers} </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
