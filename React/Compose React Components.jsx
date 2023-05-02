//Componer componentes de reacción
/* A medida que continúan los desafíos de usar composiciones más complejas con componentes React y JSX, hay un punto importante a tener en cuenta. Renderizar componentes de clase de estilo ES6 dentro de otros componentes no es diferente a renderizar los componentes simples que usó en los últimos desafíos. Puede representar elementos JSX, componentes funcionales sin estado y componentes de clase ES6 dentro de otros componentes.

En el editor de código, el TypesOfFoodcomponente ya está representando un componente llamado Vegetables. Además, está el Fruitscomponente del último desafío.

Anide dos componentes dentro de Fruits— primero NonCitrusy luego Citrus. Ambos componentes se proporcionan detrás de escena. A continuación, anide el Fruitscomponente de clase en el TypesOfFoodcomponente, debajo del h1elemento de encabezado y arriba Vegetables. El resultado debería ser una serie de componentes anidados, que utilizan dos tipos de componentes diferentes.*/
//Ejercicio
/* El TypesOfFoodcomponente debe devolver un solo div elemento.
El TypesOfFood componente debe devolver el Fruits componente.
El Fruits componente debe devolver el NonCitrus componente y el Citrus componente.
El TypesOfFood componente debe devolver el Vegetables componente debajo del Fruits componente.*/

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        {/* Change code below this line */}
        <NonCitrus />
        <Citrus />
        {/* Change code above this line */}
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
}
