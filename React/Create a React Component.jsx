//Crear un componente de reacción
/* La otra forma de definir un componente de React es con la classsintaxis de ES6. En el siguiente ejemplo, Kittenextends React.Component:

class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
Esto crea una clase ES6 Kittenque amplía la React.Componentclase. Por lo tanto, la Kittenclase ahora tiene acceso a muchas características útiles de React, como enlaces de estado local y ciclo de vida. No se preocupe si aún no está familiarizado con estos términos, se tratarán con mayor detalle en desafíos posteriores. También observe que la Kittenclase tiene un constructordefinido dentro que llama a super(). Se utiliza super()para llamar al constructor de la clase padre, en este caso React.Component. El constructor es un método especial que se utiliza durante la inicialización de objetos que se crean con la classpalabra clave. Es una buena práctica llamar a un componente constructorcon supery pasarpropsa ambos. Esto asegura que el componente se inicialice correctamente. Por ahora, sepa que es estándar que se incluya este código. Pronto verá otros usos para el constructor, así como para props.

MyComponentse define en el editor de código utilizando la sintaxis de clase. Termina de escribir el rendermétodo para que devuelva un divelemento que contenga un h1con el texto Hello React!.*/
//Ejercicio
/* El componente React debería devolver un div elemento.
El devuelto div debe representar un h1 elemento de encabezado dentro de él.
El h1 elemento de encabezado debe contener la cadena Hello React!.*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );

    // Change code above this line
  }
}
