//Renderizar un componente de clase al DOM
/* Puede recordar usar la API de ReactDOM en un desafío anterior para representar elementos JSX en el DOM. El proceso para renderizar los componentes de React será muy similar. Los últimos desafíos se centraron en los componentes y la composición, por lo que el renderizado se realizó detrás de escena. Sin embargo, ninguno de los códigos de React que escriba se procesará en el DOM sin realizar una llamada a la API de ReactDOM.

He aquí un repaso de la sintaxis: ReactDOM.render(componentToRender, targetNode). El primer argumento es el componente React que desea renderizar. El segundo argumento es el nodo DOM en el que desea representar ese componente.

Los componentes de React se pasan a ReactDOM.render()elementos un poco diferentes a los de JSX. Para los elementos JSX, pasa el nombre del elemento que desea representar. Sin embargo, para los componentes de React, debe usar la misma sintaxis que si estuviera renderizando un componente anidado, por ejemplo ReactDOM.render(<ComponentToRender />, targetNode). Utilice esta sintaxis tanto para los componentes de clase ES6 como para los componentes funcionales.

Tanto los Fruitscomponentes Vegetables como se definen detrás de escena. Renderice ambos componentes como hijos del TypesOfFoodcomponente, luego renderice TypesOfFoodal DOM. Hay un divcon id='challenge-node'disponible para su uso.

*/
//Ejercicio
/* El TypesOfFoodcomponente debe devolver un solo divelemento.
El TypesOfFoodcomponente debe representar el Fruits componente después del h1 elemento.
El TypesOfFoodcomponente debe representar el Vegetables componente después de Fruits.
El TypesOfFoodcomponente debe mostrarse en el DOM dentro del divcon el id challenge-node*/

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

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
