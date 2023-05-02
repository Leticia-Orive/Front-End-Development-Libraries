//Usar accesorios predeterminados
/*React también tiene una opción para establecer accesorios predeterminados. Puede asignar accesorios predeterminados a un componente como una propiedad en el propio componente y React asigna el accesorio predeterminado si es necesario. Esto le permite especificar cuál debería ser el valor de una prop si no se proporciona ningún valor explícitamente. Por ejemplo, si declara MyComponent.defaultProps = { location: 'San Francisco' }, ha definido una propiedad de ubicación que se establece en la cadena San Francisco, a menos que especifique lo contrario. React asigna accesorios predeterminados si los accesorios no están definidos, pero si pasa nullcomo el valor de un accesorio, permanecerá null.

El editor de código muestra un ShoppingCartcomponente. Defina accesorios predeterminados en este componente que especifique un accesorio itemscon un valor de 0. */
//Ejercicio
/* El ShoppingCartcomponente debe renderizarse.
esperando :El ShoppingCartcomponente debe tener una propiedad predeterminada de { items: 0 }.*/

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};
// Change code below this line

ShoppingCart.defaultProps = {
  items: 0,
};
