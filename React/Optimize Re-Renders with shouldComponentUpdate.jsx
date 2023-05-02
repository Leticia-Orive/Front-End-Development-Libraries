//Optimice las nuevas renderizaciones con shouldComponentUpdate
/* Hasta ahora, si algún componente recibe new stateo new props, se vuelve a renderizar a sí mismo y a todos sus hijos. Esto suele estar bien. Pero React proporciona un método de ciclo de vida al que puede llamar cuando los componentes secundarios reciben new stateo props, y declara específicamente si los componentes deben actualizarse o no. El método es shouldComponentUpdate(), y toma nextPropsy nextStatecomo parámetros.

Este método es una forma útil de optimizar el rendimiento. Por ejemplo, el comportamiento predeterminado es que su componente se vuelve a renderizar cuando recibe new props, incluso si propsno ha cambiado. Puede usar shouldComponentUpdate()para evitar esto comparando el archivo props. El método debe devolver un booleanvalor que le diga a React si actualizar o no el componente. Puede comparar los accesorios actuales ( this.props) con los accesorios siguientes ( nextProps) para determinar si necesita actualizar o no, y regresar trueo falsesegún corresponda.

El shouldComponentUpdate()método se agrega en un componente llamado OnlyEvens. Actualmente, este método devuelve true, por lo que OnlyEvensse vuelve a renderizar cada vez que recibe un nuevo archivo props. Modifique el método para que OnlyEvensse actualice solo si el valuede sus nuevos accesorios es par. Haga clic en el Addbotón y observe el orden de los eventos en la consola de su navegador a medida que se activan los ganchos del ciclo de vida.*/
//Ejercicio
/* El Controller componente debe representar el OnlyEvenscomponente como un elemento secundario.
El shouldComponent Update método debe definirse en el Only Evenscomponente.
El OnlyEvens componente debe devolver una h1 etiqueta que represente el valor de this.props.value.
OnlyEvens debe volver a renderizar solo cuando nextProps.valuees par.*/

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    // Change code below this line
    if (nextProps.value % 2 == 0) {
      return true;
    }
    return false;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
