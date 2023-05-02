//Acceso a accesorios usando this.props
/* Los últimos desafíos cubrieron las formas básicas de pasar accesorios a componentes secundarios. Pero, ¿qué sucede si el componente secundario al que está pasando un accesorio es un componente de clase ES6, en lugar de un componente funcional sin estado? El componente de clase ES6 usa una convención ligeramente diferente para acceder a los accesorios.

Cada vez que se refiere a un componente de clase dentro de sí mismo, utiliza la thispalabra clave. Para acceder a accesorios dentro de un componente de clase, debe anteponer el código que usa para acceder a él con this. Por ejemplo, si un componente de clase ES6 tiene un accesorio llamado data, escribe {this.props.data}en JSX.

Renderice una instancia del Welcomecomponente en el componente principal App. Aquí, dale Welcomeuna propiedad namey asígnale un valor de una cadena. Dentro del niño, Welcome acceda al nameaccesorio dentro de las strong etiquetas.*/
//Ejercicio
/* El Appcomponente debe devolver un solo divelemento.
El hijo de App debe ser el Welcomecomponente.
El Welcomecomponente debe tener un accesorio llamado name.
El Welcomecomponente debe mostrar la cadena que pasa como nameaccesorio dentro de stronglas etiquetas.*/
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Welcome name="Leticia" />
        {/* Change code above this line */}
      </div>
    );
  }
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* Change code above this line */}
      </div>
    );
  }
}
