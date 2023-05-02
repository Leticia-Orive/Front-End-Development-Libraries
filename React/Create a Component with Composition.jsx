//Crear un componente con composición
/* Ahora veremos cómo podemos componer varios componentes de React juntos. Imagine que está creando una aplicación y ha creado tres componentes: a Navbar, Dashboardy Footer.

Para componer estos componentes juntos, puede crear un componente App principal que represente cada uno de estos tres componentes como elementos secundarios . Para representar un componente como elemento secundario en un componente de React, incluya el nombre del componente escrito como una etiqueta HTML personalizada en el JSX. Por ejemplo, en el rendermétodo podrías escribir:

return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
Cuando React encuentra una etiqueta HTML personalizada que hace referencia a otro componente (un nombre de componente envuelto < />como en este ejemplo), muestra el marcado de ese componente en la ubicación de la etiqueta. Esto debería ilustrar la relación padre/hijo entre el Appcomponente y el Navbar, Dashboardy Footer.

En el editor de código, hay un componente funcional simple llamado ChildComponenty un componente de clase llamado ParentComponent. Componga los dos juntos representando el ChildComponentdentro del ParentComponent. Asegúrese de cerrar la ChildComponentetiqueta con una barra diagonal.

Nota: ChildComponent se define con una función de flecha ES6 porque esta es una práctica muy común cuando se usa React. Sin embargo, sepa que esto es solo una función. Si no está familiarizado con la sintaxis de la función de flecha, consulte la sección de JavaScript.*/
//Ejercicio
/* El componente React debe devolver un solo divelemento.
El componente debe devolver dos elementos anidados.
El componente debe devolver ChildComponent como su segundo hijo.*/

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* Change code below this line */}
        <ChildComponent />

        {/* Change code above this line */}
      </div>
    );
  }
}
