//Render React en el servidor con renderToStringS
/* Hasta ahora, ha estado renderizando componentes de React en el cliente. Normalmente, esto es lo que siempre harás. Sin embargo, hay algunos casos de uso en los que tiene sentido renderizar un componente de React en el servidor. Dado que React es una biblioteca de vista de JavaScript y puede ejecutar JavaScript en el servidor con Node, esto es posible. De hecho, React proporciona un renderToString()método que puede usar para este propósito.

Hay dos razones clave por las que la renderización en el servidor se puede usar en una aplicación del mundo real. Primero, sin hacer esto, sus aplicaciones React consistirían en un archivo HTML relativamente vacío y un gran paquete de JavaScript cuando se carga inicialmente en el navegador. Esto puede no ser ideal para los motores de búsqueda que intentan indexar el contenido de sus páginas para que las personas puedan encontrarlo. Si presenta el marcado HTML inicial en el servidor y lo envía al cliente, la carga de la página inicial contiene todo el marcado de la página que los motores de búsqueda pueden rastrear. En segundo lugar, esto crea una experiencia de carga de página inicial más rápida porque el HTML representado es más pequeño que el código JavaScript de toda la aplicación. React aún podrá reconocer su aplicación y administrarla después de la carga inicial.

El renderToString()método se proporciona en ReactDOMServer, que está disponible aquí como un objeto global. El método toma un argumento que es un elemento React. Use esto para representar Appuna cadena.*/
//Ejercicio
/* El App componente debe representar una cadena usando ReactDOMServer.renderToString.*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

// Change code below this line
ReactDOMServer.renderToString(<App />);
