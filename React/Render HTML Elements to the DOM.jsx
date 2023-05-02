//Renderizar elementos HTML al DOM
/* Hasta ahora, ha aprendido que JSX es una herramienta conveniente para escribir HTML legible dentro de JavaScript. Con React, podemos renderizar este JSX directamente al HTML DOM usando la API de renderizado de React conocida como ReactDOM.

ReactDOM ofrece un método simple para representar elementos React en el DOM que se ve así: ReactDOM.render(componentToRender, targetNode), donde el primer argumento es el elemento o componente React que desea representar, y el segundo argumento es el nodo DOM en el que desea representar el componente. .

Como era de esperar, ReactDOM.render()debe llamarse después de las declaraciones de elementos JSX, al igual que debe declarar variables antes de usarlas.

El editor de código tiene un componente JSX simple. Utilice el ReactDOM.render()método para representar este componente en la página. Puede pasar elementos JSX definidos directamente como el primer argumento y usarlos document.getElementById()para seleccionar el nodo DOM para representarlos. Hay un divcon id='challenge-node'disponible para su uso. Asegúrate de no cambiar la JSXconstante.*/
//Ejercicios
/* La constante JSXdebe devolver un divelemento.
El div debe contener una h1 etiqueta como primer elemento.
El div debe contener una p etiqueta como segundo elemento.
El elemento JSX provisto debe mostrarse en el nodo DOM con id challenge-node.*/

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById("challenge-node"));
