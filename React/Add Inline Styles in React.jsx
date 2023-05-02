//Agregar estilos en línea en React
/* Es posible que haya notado en el último desafío que había varias otras diferencias de sintaxis de los estilos en línea de HTML además del styleatributo establecido en un objeto de JavaScript. Primero, los nombres de ciertas propiedades de estilo CSS usan mayúsculas y minúsculas. Por ejemplo, el último desafío estableció el tamaño de la fuente con fontSizeen lugar de font-size. Las palabras con guión como font-sizeson una sintaxis no válida para las propiedades del objeto de JavaScript, por lo que React usa mayúsculas y minúsculas. Como regla general, cualquier propiedad de estilo con guion se escribe utilizando mayúsculas y minúsculas en JSX.

Se supone que todas las unidades de longitud de valor de propiedad (como height, widthy fontSize) están dentro, pxa menos que se especifique lo contrario. Si desea utilizar em, por ejemplo, envuelva el valor y las unidades entre comillas, como {fontSize: "4em"}. Aparte de los valores de longitud predeterminados px, todos los demás valores de propiedad deben estar entre comillas.

Si tiene un gran conjunto de estilos, puede asignar un estilo objecta una constante para mantener su código organizado. Declare sus estilos constantes como una variable global en la parte superior del archivo. Inicialice styles la constante y asígne le un object con tres propiedades de estilo y sus valores. Asigne un div color de purple, un tamaño de fuente de 40 y un borde de 2px solid purple. Luego establezca el styleatributo igual a la styles constante.*/
//Ejercicio
/* La styles variable debe ser an object con tres propiedades.
La styles variable debe tener una color propiedad establecida en un valor de purple.
La styles variable debe tener una fontSize propiedad establecida en un valor de 40.
La styles variable debe tener una border propiedad establecida en un valor de 2px solid purple.
El componente debe representar un div elemento.
El divelemento debe tener sus estilos definidos por el styles objeto.*/

// Change code above this line
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple",
};

class Colorful extends React.Component {
  render() {
    // Change code below this line
    return <div style={styles}>Style Me!</div>;
    // Change code above this line
  }
}
