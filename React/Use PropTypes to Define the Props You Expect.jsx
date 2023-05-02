//Use PropTypes para definir los accesorios que espera
/* React proporciona características útiles de verificación de tipos para verificar que los componentes reciben accesorios del tipo correcto. Por ejemplo, su aplicación realiza una llamada a la API para recuperar los datos que espera que estén en una matriz, que luego se pasan a un componente como accesorio. Puede establecer propTypesen su componente que requiera que los datos sean del tipo array. Esto arrojará una advertencia útil cuando los datos sean de cualquier otro tipo.

Se considera una mejor práctica establecer propTypescuando conoce el tipo de accesorio con anticipación. Puede definir una propTypespropiedad para un componente de la misma manera que definió defaultProps. Al hacer esto, se verificará que los accesorios de una clave determinada estén presentes con un tipo determinado. Aquí hay un ejemplo para requerir el tipo functionpara un accesorio llamado handleClick:

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
En el ejemplo anterior, la PropTypes.funcparte comprueba que handleClickes una función. Agregar isRequiredle dice a React que handleClickes una propiedad requerida para ese componente. Verá una advertencia si no se proporciona ese accesorio. Observe también que funcrepresenta function. Entre los siete tipos primitivos de JavaScript, functiony boolean(escrito como bool) son los únicos dos que usan una ortografía inusual. Además de los tipos primitivos, hay otros tipos disponibles. Por ejemplo, puede verificar que un accesorio sea un elemento React. Consulte la documentación para conocer todas las opciones.

Nota: A partir de React v15.5.0, PropTypesse importa independientemente de React, así:import PropTypes from 'prop-types';

Defina propTypespara que el Itemscomponente requiera quantitycomo prop y verifique que sea de tipo number.*/
//Ejercicio
/* El ShoppingCart componente debe renderizarse.
El Items componente debe renderizarse.
El Items componente debe incluir una prop Types marca para solicitar un valor quantityy asegurarse de que su valor sea un número.*/

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// Change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired,
};
// Change code above this line

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}
