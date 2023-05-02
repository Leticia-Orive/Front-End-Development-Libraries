//Crear un elemento JSX simple
/*React es una biblioteca de vista de código abierto creada y mantenida por Facebook. Es una gran herramienta para representar la interfaz de usuario (UI) de las aplicaciones web modernas.

React usa una extensión de sintaxis de JavaScript llamada JSX que le permite escribir HTML directamente dentro de JavaScript. Esto tiene varios beneficios. Le permite usar todo el poder programático de JavaScript dentro de HTML y ayuda a mantener su código legible. En su mayor parte, JSX es similar al HTML que ya aprendió, sin embargo, hay algunas diferencias clave que se cubrirán a lo largo de estos desafíos.

Por ejemplo, debido a que JSX es una extensión sintáctica de JavaScript, en realidad puede escribir JavaScript directamente dentro de JSX. Para hacer esto, simplemente incluya el código que desea que se trate como JavaScript entre llaves: { 'this is treated as JavaScript code' }. Tenga esto en cuenta, ya que se usa en varios desafíos futuros.

Sin embargo, debido a que JSX no es JavaScript válido, el código JSX debe compilarse en JavaScript. El transpiler Babel es una herramienta popular para este proceso. Para su comodidad, ya se ha agregado entre bastidores para estos desafíos. Si escribe JSX sintácticamente inválido, verá que la primera prueba en estos desafíos falla.

Vale la pena señalar que bajo el capó los desafíos están llamando ReactDOM.render(JSX, document.getElementById('root')). Esta llamada de función es lo que coloca su JSX en la propia representación ligera de React del DOM. Luego, React usa instantáneas de su propio DOM para optimizar la actualización solo de partes específicas del DOM real.

El código actual usa JSX para asignar un div elemento a la constante JSX. Reemplace el div con un h1elemento y agregue el texto Hello JSX!dentro de él. */
//Ejercicios
/* La constante JSX debe devolver un h1 elemento.
La h1 etiqueta debe incluir el texto. Hello JSX!*/

const JSX = <h1>Hello JSX!</h1>;
