//Primeros pasos con React Redux
/*Esta serie de desafíos presenta cómo usar Redux con React. Primero, aquí hay una revisión de algunos de los principios clave de cada tecnología. React es una biblioteca de vistas que proporcionas con datos, luego representa la vista de una manera eficiente y predecible. Redux es un marco de gestión de estado que puede usar para simplificar la gestión del estado de su aplicación. Por lo general, en una aplicación React Redux, crea una única tienda Redux que administra el estado de toda su aplicación. Sus componentes de React se suscriben solo a los datos de la tienda que son relevantes para su función. Luego, envía acciones directamente desde los componentes de React, que luego activan las actualizaciones de la tienda.

Aunque los componentes de React pueden administrar su propio estado localmente, cuando tiene una aplicación compleja, generalmente es mejor mantener el estado de la aplicación en una sola ubicación con Redux. Hay excepciones cuando los componentes individuales pueden tener un estado local específico solo para ellos. Finalmente, debido a que Redux no está diseñado para funcionar con React de fábrica, debe usar el react-reduxpaquete. Proporciona una forma de pasar Redux statey dispatcha sus componentes React como props.

En los próximos desafíos, primero, creará un componente React simple que le permitirá ingresar nuevos mensajes de texto. Estos se agregan a una matriz que se muestra en la vista. Esta debería ser una buena revisión de lo que aprendiste en las lecciones de React. A continuación, creará una tienda Redux y acciones que administren el estado de la matriz de mensajes. Finalmente, usará react-reduxpara conectar la tienda Redux con su componente, extrayendo así el estado local a la tienda Redux.

Comience con un DisplayMessagescomponente. Agregue un constructor a este componente e inicialícelo con un estado que tenga dos propiedades: input, que se establece en una cadena vacía y messages, que se establece en una matriz vacía. */
//Ejercicios
/* El DisplayMessages componente debe representar un divelemento vacío.
El DisplayMessages constructor debe llamarse correctamente con super, pasando props.
El DisplayMessages componente debe tener un estado inicial igual a {input: "", messages: []}.*/

class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Change code above this line
  render() {
    return <div />;
  }
}
