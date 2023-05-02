//Dar a los elementos hermanos un atributo clave único
/* El último desafío mostró cómo mapse utiliza el método para representar dinámicamente una serie de elementos en función de la entrada del usuario. Sin embargo, faltaba una pieza importante en ese ejemplo. Cuando crea una matriz de elementos, cada uno necesita un keyatributo establecido en un valor único. React usa estas claves para realizar un seguimiento de los elementos que se agregan, cambian o eliminan. Esto ayuda a que el proceso de renderizado sea más eficiente cuando la lista se modifica de alguna manera.

Nota: Las claves solo deben ser únicas entre elementos hermanos, no es necesario que sean únicas globalmente en su aplicación.

El editor de código tiene una matriz con algunos marcos frontales y un componente funcional sin estado llamado Frameworks(). Frameworks()necesita asignar la matriz a una lista desordenada, como en el último desafío. Termine de escribir la mapdevolución de llamada para devolver un lielemento para cada marco en la frontEndFrameworksmatriz. Esta vez, asegúrese de dar a cada uno liun keyatributo, establecido en un valor único. Los lielementos también deben contener texto de frontEndFrameworks.

Normalmente, desea que la clave sea algo que identifique de forma única el elemento que se representa. Como último recurso, se puede usar el índice de matriz, pero normalmente debe intentar usar una identificación única.*/
//Ejercicio
/* El Frameworks componente debe existir y mostrarse en la página.
Frameworks debe representar un h1 elemento.
Frameworks debe representar un ul elemento.
La ul etiqueta debe representar 6 li elementos secundarios.
Cada elemento de la lista debe tener un key atributo único.
Cada elemento de la lista debe contener texto de frontEndFrameworks.*/

const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item) => (
    <li key={item}>{item}</li>
  )); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
