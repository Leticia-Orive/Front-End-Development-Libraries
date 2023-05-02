//Crear un elemento JSX complejo
/* El último desafío fue un ejemplo simple de JSX, pero JSX también puede representar HTML más complejo.

Una cosa importante que  debe saber sobre JSX anidado es que  debe devolver un solo elemento.

Este elemento principal envolvería todos los demás niveles de elementos anidados.

Por ejemplo, varios elementos JSX escritos como elementos del mismo nivel que no tienen un elemento contenedor primario no se transpilarán.

Aquí hay un ejemplo:

JSX válido:

<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
JSX no válido:

<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
Defina una nueva constante JSXque represente una divque contenga los siguientes elementos en orden:

Un h1, un py una lista desordenada que contiene tres lielementos. Puede incluir cualquier texto que desee dentro de cada elemento.

Nota: Al representar varios elementos como este, puede envolverlos todos entre paréntesis, pero no es estrictamente necesario. Observe también que este desafío usa una divetiqueta para envolver todos los elementos secundarios dentro de un único elemento principal. Si elimina el div, el JSX ya no se transpilará. Tenga esto en cuenta, ya que también se aplicará cuando devuelva elementos JSX en componentes React.*/
//Ejercicio
/*La constante JSX debe devolver un div elemento.
El div debe contener una h1 etiqueta como primer elemento.
El div debe contener una p etiqueta como segundo elemento.
El div debe contener una ul etiqueta como tercer elemento.
El ul debe contener tres li elementos. */

const JSX = (
  <div>
    <h1>Hola</h1>
    <p>El hola es un saludo que se debe dar</p>
    <ul>
      <li>vaca</li>
      <li>toro</li>
      <li>ternero</li>
    </ul>
  </div>
);
