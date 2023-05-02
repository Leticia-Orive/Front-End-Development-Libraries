//Crear un componente funcional sin estado
/* Los componentes son el núcleo de React. Todo en React es un componente y aquí aprenderás a crear uno.

Hay dos formas de crear un componente React. La primera forma es usar una función de JavaScript. Definir un componente de esta manera crea un componente funcional sin estado . El concepto de estado en una aplicación se tratará en desafíos posteriores. Por ahora, piense en un componente sin estado como uno que puede recibir datos y representarlos, pero no administra ni realiza un seguimiento de los cambios en esos datos. (Cubriremos la segunda forma de crear un componente React en el próximo desafío).

Para crear un componente con una función, simplemente escriba una función de JavaScript que devuelva JSX o null. Una cosa importante a tener en cuenta es que React requiere que el nombre de su función comience con una letra mayúscula. Aquí hay un ejemplo de un componente funcional sin estado que asigna una clase HTML en JSX:

const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
Después de transpilarse, <div>tendrá una clase CSS de customClass.

Debido a que un componente JSX representa HTML, puede juntar varios componentes para crear una página HTML más compleja. Esta es una de las ventajas clave de la arquitectura de componentes que proporciona React. Le permite componer su interfaz de usuario a partir de muchos componentes separados y aislados. Esto facilita la creación y el mantenimiento de interfaces de usuario complejas.

El editor de código tiene una función llamada MyComponent. Complete esta función para que devuelva un solo divelemento que contenga alguna cadena de texto.

Nota: El texto se considera un elemento secundario del divelemento, por lo que no podrá utilizar una etiqueta de cierre automático.*/
//Ejercicio
/* MyComponent debe devolver JSX.
MyComponent debe devolver un div elemento.
El div elemento debe contener una cadena de texto.*/

const MyComponent = function () {
  // Change code below this line
  return <div>Hola Mundo</div>;

  // Change code above this line
};
