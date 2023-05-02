//Definir una clase HTML en JSX
/* Ahora que se siente cómodo escribiendo JSX, puede que se pregunte en qué se diferencia de HTML.

Hasta ahora, puede parecer que HTML y JSX son exactamente iguales.

Una diferencia clave en JSX es que ya no puede usar la palabra classpara definir clases HTML. Esto se debe a que classes una palabra reservada en JavaScript. En cambio, JSX usa className.

De hecho, la convención de nomenclatura para todos los atributos HTML y referencias de eventos en JSX se convierte en camelCase. Por ejemplo, un evento de clic en JSX es onClick, en lugar de onclick. Del mismo modo, onchangese convierte en onChange. Si bien esta es una diferencia sutil, es importante tenerla en cuenta para seguir adelante.

Aplique una clase de myDiva la divproporcionada en el código JSX.*/
//Ejercicio
/* La constante JSX debe devolver un div elemento.
El div debe tener una clase de my Div.*/
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
