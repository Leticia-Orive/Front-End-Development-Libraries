//Más información sobre las etiquetas JSX de cierre automático
/* Hasta ahora, ha visto cómo JSX difiere de HTML de manera clave con el uso de classNamevs. classpara definir clases de HTML.

Otra forma importante en la que JSX difiere de HTML es la idea de la etiqueta de cierre automático.

En HTML, casi todas las etiquetas tienen una etiqueta de apertura y otra de cierre: <div></div>; la etiqueta de cierre siempre tiene una barra inclinada antes del nombre de la etiqueta que está cerrando. Sin embargo, hay instancias especiales en HTML llamadas "etiquetas de cierre automático", o etiquetas que no requieren una etiqueta de apertura y una de cierre antes de que pueda comenzar otra etiqueta.

Por ejemplo, la etiqueta de salto de línea puede escribirse como <br>o como <br />, pero nunca debe escribirse como <br></br>, ya que no contiene ningún contenido.

En JSX, las reglas son un poco diferentes. Cualquier elemento JSX se puede escribir con una etiqueta de cierre automático y todos los elementos deben estar cerrados. La etiqueta de salto de línea, por ejemplo, siempre debe escribirse como <br />para que sea un JSX válido que se pueda transpilar. A <div>, por otro lado, se puede escribir como <div />o <div></div>. La diferencia es que en la primera versión de sintaxis no hay forma de incluir nada en el archivo <div />. Verá en desafíos posteriores que esta sintaxis es útil al renderizar componentes de React.

Solucione los errores en el editor de código para que sea JSX válido y se transpile correctamente. Asegúrese de no cambiar nada del contenido; solo necesita cerrar las etiquetas donde sea necesario.*/
//Ejercicio
/* La constante JSX debe devolver un div elemento.
El div debe con tener una br etiqueta.
El div debe con tener una hr etiqueta.*/
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
