//Revisar el uso de accesorios con componentes funcionales sin estado
/* Excepto por el último desafío, ha estado pasando accesorios a componentes funcionales sin estado. Estos componentes actúan como funciones puras. Aceptan accesorios como entrada y devuelven la misma vista cada vez que pasan los mismos accesorios. Quizás se pregunte qué estado es, y el próximo desafío lo cubrirá con más detalle. Antes de eso, aquí hay una revisión de la terminología de los componentes.

Un componente funcional sin estado es cualquier función que escriba que acepte accesorios y devuelva JSX. Un componente sin estado , por otro lado, es una clase que se extiende React.Component, pero no usa el estado interno (cubierto en el siguiente desafío). Finalmente, un componente con estado es un componente de clase que mantiene su propio estado interno. Es posible que vea componentes con estado denominados simplemente componentes o componentes React.

Un patrón común es intentar minimizar el estado y crear componentes funcionales sin estado siempre que sea posible. Esto ayuda a contener la gestión de su estado en un área específica de su aplicación. A su vez, esto mejora el desarrollo y el mantenimiento de su aplicación al facilitar el seguimiento de cómo los cambios de estado afectan su comportamiento.

El editor de código tiene un CampSitecomponente que representa un Campercomponente como un elemento secundario. Defina el Campercomponente y asígnele accesorios predeterminados de { name: 'CamperBot' }. Dentro del Campercomponente, represente cualquier código que desee, pero asegúrese de tener un pelemento que incluya solo el namevalor que se pasa como un archivo prop. Finalmente, defina propTypesel Campercomponente que se requiere nameproporcionar como accesorio y verifique que sea de tipo string.*/
//Ejercicio
/* El CampSite componente debe renderizarse.
El Camper componente debe renderizarse.
El Camper componente debe incluir accesorios predeterminados que asignan la cadena CamperBota la clave name.
El Camper componente debe incluir tipos de accesorios que requieran que el nameaccesorio sea del tipo string.
El Camper componente debe contener un pelemento con solo el texto de la name propiedad.*/

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// Change code below this line

const Camper = (props) => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot",
};

Camper.propTypes = {
  name: PropTypes.string.isRequired,
};
