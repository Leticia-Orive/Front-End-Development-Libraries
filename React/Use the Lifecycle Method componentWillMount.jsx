//Usar el componente Método de ciclo de vidaWillMount
/* Los componentes de React tienen varios métodos especiales que brindan oportunidades para realizar acciones en puntos específicos del ciclo de vida de un componente. Estos se denominan métodos de ciclo de vida o ganchos de ciclo de vida y le permiten capturar componentes en ciertos puntos en el tiempo. Esto puede ser antes de que se rendericen, antes de que se actualicen, antes de que reciban accesorios, antes de que se desmonten, etc. Aquí hay una lista de algunos de los principales métodos de ciclo de vida: componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount() Las próximas lecciones cubrirán algunos de los casos de uso básicos para estos métodos de ciclo de vida.

Nota: El componentWillMountmétodo Lifecycle quedará obsoleto en una versión futura de 16.X y se eliminará en la versión 17. Obtenga más información en este artículo

El componentWillMount() método se llama antes que el render() método cuando se monta un componente en el DOM. Registre algo en la consola interna componentWillMount(); es posible que desee tener la consola de su navegador abierta para ver el resultado.*/
//Ejercicio
/* MyComponent debe representar un div elemento.
console.log debe ser llamado componentWillMount.*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line

    console.log("Component being mounted");

    // Change code above this line
  }
  render() {
    return <div />;
  }
}
