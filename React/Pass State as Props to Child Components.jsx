//Pasar estado como accesorios a componentes secundarios
/* Viste muchos ejemplos que pasaron accesorios a elementos JSX secundarios y componentes React secundarios en desafíos anteriores. Quizás te estés preguntando de dónde vienen esos accesorios. Un patrón común es tener un componente con estado que contenga lo stateimportante para su aplicación, que luego represente los componentes secundarios. Desea que estos componentes tengan acceso a algunas partes de eso state, que se pasan como accesorios.

Por ejemplo, tal vez tenga un Appcomponente que represente un Navbar, entre otros componentes. En su App, tiene stateque contiene mucha información del usuario, pero solo Navbarnecesita acceso al nombre de usuario del usuario para que pueda mostrarlo. Pasas esa pieza de state al Navbar componente como accesorio.

Este patrón ilustra algunos paradigmas importantes en React. El primero es el flujo de datos unidireccional.. El estado fluye en una dirección hacia abajo en el árbol de los componentes de su aplicación, desde el componente principal con estado hasta los componentes secundarios. Los componentes secundarios solo reciben los datos de estado que necesitan. La segunda es que las aplicaciones con estado complejas se pueden dividir en unos pocos, o tal vez en un solo componente con estado. El resto de sus componentes simplemente reciben el estado del padre como accesorios y representan una interfaz de usuario de ese estado. Comienza a crear una separación en la que la administración del estado se maneja en una parte del código y la representación de la interfaz de usuario en otra. Este principio de separar la lógica de estado de la lógica de la interfaz de usuario es uno de los principios clave de React. Cuando se usa correctamente, hace que el diseño de aplicaciones complejas y con estado sea mucho más fácil de administrar.

El MyAppcomponente tiene estado y representa un Navbarcomponente como un elemento secundario. Pase la name propiedad en su state parte inferior al componente secundario, luego muestre name en la h1 etiqueta que es parte del Navbar método de representación. name debe aparecer después del texto Hello, my name is:.*/
//Ejercicio
/* El MyApp componente debe renderizarse con un Navbar componente dentro.
El Navbar componente debe recibir la MyApp propiedad estatal name como apoyos.
El h1 elemento en Navbar debe representar el name accesorio.*/

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Navbar name={this.state.name} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        // Since we passed in the CamperBot state value into the the NavBar
        component above // the h1 element below will render the value passed
        from state
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}
