//Pasar accesorios a un componente funcional sin estado
/* Los desafíos anteriores cubrieron mucho sobre la creación y composición de elementos JSX, componentes funcionales y componentes de clase de estilo ES6 en React. Con esta base, es hora de ver otra característica muy común en React: props . En React, puede pasar accesorios o propiedades a componentes secundarios. Digamos que tiene un Appcomponente que representa un componente secundario llamado Welcomeque es un componente funcional sin estado. Puede pasar Welcomeuna userpropiedad escribiendo:

<App>
  <Welcome user='Mark' />
</App>
Utiliza atributos HTML personalizados creados por usted y compatibles con React para pasarlos al componente. En este caso, la propiedad creada userse pasa al componente Welcome. Dado que Welcomees un componente funcional sin estado, tiene acceso a este valor de la siguiente manera:

const Welcome = (props) => <h1>Hello, {props.user}!</h1>
Es estándar llamar a este valor propsy cuando se trata de componentes funcionales sin estado, básicamente lo considera como un argumento para una función que devuelve JSX. Puede acceder al valor del argumento en el cuerpo de la función. Con los componentes de clase, verá que esto es un poco diferente.

Hay Calendary CurrentDatecomponentes en el editor de código. Al renderizar CurrentDatedesde el Calendarcomponente, pase una propiedad dateasignada a la fecha actual desde el Dateobjeto de JavaScript. Luego acceda a esto propen el CurrentDatecomponente, mostrando su valor dentro de las petiquetas. Tenga en cuenta que para que proplos valores se evalúen como JavaScript, deben estar encerrados entre corchetes, por ejemplo date={Date()}.

*/
//Ejercicio
/*El Calendarcomponente debe devolver un solo divelemento.
El segundo hijo del Calendarcomponente debe ser el CurrentDatecomponente.
El CurrentDatecomponente debe tener un accesorio llamado date.
El date accesorio del CurrentDatedebe contener una cadena de texto.
El date accesorio debe generarse llamandoDate()
El CurrentDatecomponente debe representar el valor de la datepropiedad en la petiqueta. */

const CurrentDate = (props) => {
  return (
    <div>
      {/* Change code below this line */}
      <p>The current date is: {props.date} </p>
      {/* Change code above this line */}
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* Change code below this line */}
        <CurrentDate date={Date()} />
        {/* Change code above this line */}
      </div>
    );
  }
}
