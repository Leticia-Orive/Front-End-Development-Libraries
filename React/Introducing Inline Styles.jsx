//Introducción a los estilos en línea
/*Hay otros conceptos complejos que agregan capacidades poderosas a su código React. Pero es posible que se esté preguntando sobre el problema más simple de cómo diseñar esos elementos JSX que crea en React. Probablemente sepa que no será exactamente lo mismo que trabajar con HTML debido a la forma en que aplica las clases a los elementos JSX .

Si importa estilos desde una hoja de estilo, no hay mucha diferencia. Aplica una clase a su elemento JSX usando el classNameatributo y aplica estilos a la clase en su hoja de estilo. Otra opción es aplicar estilos en línea, que son muy comunes en el desarrollo de ReactJS.

Aplica estilos en línea a los elementos JSX de manera similar a como lo hace en HTML, pero con algunas diferencias JSX. Aquí hay un ejemplo de un estilo en línea en HTML:

<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
Los elementos JSX usan el styleatributo, pero debido a la forma en que se transpila JSX, no puede establecer el valor en string. En su lugar, lo establece igual a un JavaScript object. Aquí hay un ejemplo:

<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
Observe cómo camelCase la fontSizepropiedad? Esto se debe a que React no aceptará claves de caso de kebab en el objeto de estilo. React aplicará el nombre de propiedad correcto para nosotros en el HTML.

Agregue un style atributo en divel editor de código para darle al texto un color rojo y un tamaño de fuente de 72 px.

Tenga en cuenta que puede configurar opcionalmente el tamaño de fuente para que sea un número, omitiendo las unidades pxo escribirlo como 72 px. */
//Ejercicio
/* El componente debe representar un div elemento.
El div elemento debe tener un color de red.
El div elemento debe tener un tamaño de fuente de 72px.*/

class Colorful extends React.Component {
  render() {
    return <div style={{ color: "red", fontSize: "72" }}>Big Red</div>;
  }
}
