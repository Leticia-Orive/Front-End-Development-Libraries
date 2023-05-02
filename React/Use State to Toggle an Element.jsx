//Usar estado para alternar un elemento
/* A veces, es posible que necesite conocer el estado anterior al actualizar el estado. Sin embargo, las actualizaciones de estado pueden ser asíncronas, lo que significa que React puede agrupar varias setState()llamadas en una sola actualización. Esto significa que no puede confiar en el valor anterior de this.stateo this.propsal calcular el valor siguiente. Por lo tanto, no debe usar un código como este:

this.setState({
  counter: this.state.counter + this.props.increment
});
En su lugar, debe pasar setStateuna función que le permita acceder al estado y los accesorios. Usando una función con setStategarantías, está trabajando con los valores más actuales de estado y accesorios. Esto significa que lo anterior debe reescribirse como:

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
También puede usar un formulario sin propssi solo necesita state:

this.setState(state => ({
  counter: state.counter + 1
}));
Tenga en cuenta que debe envolver el objeto literal entre paréntesis, de lo contrario, JavaScript cree que es un bloque de código.

MyComponenttiene una visibilitypropiedad que se inicializa en false. El método render devuelve una vista si el valor de visibilityes verdadero y una vista diferente si es falso.

Actualmente, no hay forma de actualizar la visibility propiedad en el archivo state. El valor debe alternar entre verdadero y falso. Hay un controlador de clic en el botón que activa un método de clase llamado toggleVisibility(). Pase una función a setStatepara definir este método de modo que el statede visibilitycambie al valor opuesto cuando se llame al método. Si visibilityes false, el método lo establece en true, y viceversa.

Finalmente, haga clic en el botón para ver la representación condicional del componente en función de su archivo state.

Sugerencia: ¡ No olvide vincular la this palabra clave al método en el constructor!*/
//Ejercicio
/* MyComponentdebe devolver un div elemento que contiene un button.
El estado de MyComponent debe inicializarse con una visibility propiedad establecida en false.
visibilityAl hacer clic en el elemento del botón, el estado de la propiedad debería alternar entre true y false.
Se debe pasar una función anónima a setState.
this no se debe utilizar en el interior setState*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState((state) => {
      if (state.visibility === true) {
        return { visibility: false };
      } else {
        return { visibility: true };
      }
    });
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
