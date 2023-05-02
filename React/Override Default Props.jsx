//Anular accesorios predeterminados
/* La capacidad de establecer accesorios predeterminados es una función útil en React. La forma de anular los accesorios predeterminados es establecer explícitamente los valores de accesorios para un componente.

El ShoppingCartcomponente ahora representa un componente secundario Items. Este Itemscomponente tiene una propiedad predeterminada quantityestablecida en el número entero 0. Anule la propiedad predeterminada pasando un valor de 10for quantity.

Nota: Recuerde que la sintaxis para agregar un accesorio a un componente es similar a la forma en que agrega atributos HTML. Sin embargo, dado que el valor de quantityes un número entero, no irá entre comillas, pero debe estar entre llaves. Por ejemplo, {100}. Esta sintaxis le dice a JSX que interprete el valor entre llaves directamente como JavaScript.*/
//Ejercicio
/*El componente ShoppingCartdebe renderizarse.
El componente Items debe renderizarse.
El Itemscomponente debe tener una prop de { quantity: 10 }pasado desde el ShoppingCartcomponente. */

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      /* Change code below this line */
    }
    return <Items quantity={10} />;
    {
      /* Change code above this line */
    }
  }
}
